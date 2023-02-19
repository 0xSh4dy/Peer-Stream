/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Button, TextField } from '@mui/material';
import { useState, useRef } from 'react';
import { DriveFolderUpload } from '@mui/icons-material';
import { Typography } from '@mui/material';
import { Upload } from 'tus-js-client';
import Web3 from 'web3';
import { PROXY_VIDEO_ABI } from '../../constants';
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AddressContext } from '../../App';

import { useCreateAsset } from '@livepeer/react';
import { Alert } from '../Login';
import Snackbar from '@mui/material/Snackbar';
import { DOWNLOAD_BASE_URL, LIVEPEER_API_URL } from '../../constants';

function ModifiedSnackbar({ snackBarOpen, handleClose, severity, message }) {
  return (
    <Snackbar open={snackBarOpen} autoHideDuration={6000} onClose={handleClose}>
      <Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
        {message}
      </Alert>
    </Snackbar>
  );
}

function FileUploadForm(props) {
  const inputFile = useRef();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [video, setVideo] = useState(null);
  const [snackOpts, setSnackOpts] = useState({
    open: false,
    severity: '',
    message: '',
  });
  const { address, setAddress } = useContext(AddressContext);
  const navigate = useNavigate();

  useEffect(() => {
    window.ethereum?.request({ method: 'eth_requestAccounts' }).then((res) => {
      setAddress(res[0]);
    });
  }, []);

  useEffect(() => {
    if (address === null) {
      navigate('/home');
    }
  }, [address]);

  const {
    mutate: createAsset,
    data: assets,
    status,
    progress,
    error,
  } = useCreateAsset(
    video
      ? {
        sources: [
          { name: title.length > 0 ? title : video.name, file: video },
        ],
      }
      : null
  );
  const handleClose = (event) => {
    setSnackOpts(prevOpts => (
      {
        ...prevOpts,
        open: false
      }
    ))
  }
  return (
    <React.Fragment>
      <TextField
        autoFocus
        margin='dense'
        type='text'
        label='Title'
        fullWidth
        variant='standard'
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <TextField
        autoFocus
        margin='dense'
        type='text'
        label='Description'
        fullWidth
        variant='standard'
        sx={{ mt: 3 }}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />
      <Button
        sx={{ borderRadius: 1, mt: 3 }}
        variant='contained'
        startIcon={<DriveFolderUpload />}
        onClick={() => {
          inputFile.current.click();
        }}
      >
        Browse File
        <input
          type='file'
          id='file'
          ref={inputFile}
          style={{ display: 'none' }}
          onChange={(e) => {
            setVideo(e.target.files[0]);
          }}
        />
      </Button>
      <Button
        variant='contained'
        sx={{ ml: 4, mt: 3 }}
        onClick={async () => {
          let response = await fetch(
            'https://livepeer.studio/api/asset/request-upload',
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${process.env.REACT_APP_LIVEPEER_API_KEY}`,
              },
              body: JSON.stringify({
                name: title,
              }),
            }
          );
          let data = await response.json();

          // ------------------------------
          const tusEndpoint = data.tusEndpoint;
          const url = data.url;
          const upload = new Upload(video, {
            endpoint: tusEndpoint,
            metadata: {
              title,
              filetype: 'video/mp4',
            },
            uploadSize: video.size,
            onError(err) {
              console.log('Error uploading file: ', err);
            },
            onProgress(bytesUploaded, bytesTotal) {
              const percentage = ((bytesUploaded / bytesTotal) * 100).toFixed(
                2
              );
              console.log('Uploaded ' + percentage + '%');
            },
            async onSuccess() {
              const downloadUrl = `${DOWNLOAD_BASE_URL}/${data.asset.playbackId}/video`;
              let headers = new Headers();
              headers.append('Content-Type', 'application/json');
              headers.append('Accept', 'application/json');
              headers.append(
                'Authorization',
                `Bearer ${process.env.REACT_APP_LIVEPEER_API_KEY}`
              );
              fetch(LIVEPEER_API_URL, {
                mode: 'cors',
                method: 'GET',
                headers: headers,
              })
                .then((resp) => resp.json())
                .then(async (assetData) => {
                  const web3 = new Web3(Web3.givenProvider);
                  const contractAddress =
                    '0x3D3c236EAcffB96769eb8507C041a63425d181Cd';
                  const contract = await new web3.eth.Contract(
                    PROXY_VIDEO_ABI,
                    contractAddress
                  );

                  let latestUpload = assetData.filter(
                    (assetItem) =>
                      assetItem.playbackId === data.asset.playbackId
                  );
                  let latestUploadObject = latestUpload[0];
                  let videoId = latestUploadObject.id;
                  let videoName = latestUploadObject.name;
                  let videoDescription = description;
                  let createdAt = web3.utils.toBN(
                    String(latestUploadObject.createdAt)
                  );
                  let playbackId = data.asset.playbackId;
                  let videoSize = web3.utils.toBN(String(video.size));

                  contract.methods
                    .uploadVideo(
                      videoId,
                      videoName,
                      videoDescription,
                      createdAt,
                      videoSize,
                      downloadUrl,
                      playbackId
                    )
                    .send({ from: address })
                    .on('confirmation', function (confirmationNumber, receipt) {
                      const newOpts = {
                        open: true,
                        severity: 'success',
                        message: `Video ${video.name} uploaded successfully`,
                      };
                      setSnackOpts((prevOpts) => ({
                        ...prevOpts,
                        ...newOpts,
                      }));
                    })
                    .on('error', function (error, receipt) {
                      const newOpts = {
                        open: true,
                        severity: 'error',
                        message: `Upload to livepeer assets got rejected by the network`,
                      };
                      setSnackOpts((prevOpts) => ({
                        ...prevOpts,
                        ...newOpts,
                      }));
                    });
                });
            },
          });

          upload.start();
        }}
      >
        Create Asset
      </Button>
      {video ? (
        <Typography sx={{ mt: 1 }} paragraph={true}>
          {' '}
          {video.name}
        </Typography>
      ) : (
        <React.Fragment></React.Fragment>
      )}
      <ModifiedSnackbar
        snackBarOpen={snackOpts.open}
        handleClose={handleClose}
        severity={snackOpts.severity}
        message={snackOpts.message}
      />
    </React.Fragment>
  );
}

export default FileUploadForm;
