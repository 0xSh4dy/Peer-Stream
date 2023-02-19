import React from "react";
import { Button, TextField } from "@mui/material";
import { useState, useRef } from "react";
import { DriveFolderUpload } from "@mui/icons-material";
import { Typography } from "@mui/material";
import {Upload} from "tus-js-client";
import Web3 from "web3";
import { ProxyVideoABI } from "../../constants";
import { useContext ,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { AddressContext } from "../../App";

import {
  Player,
  LivepeerProvider,
  useCreateAsset,
  useLivepeerProvider,
} from "@livepeer/react";

function FileUploadForm(props) {
  const inputFile = useRef();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [video, setVideo] = useState(null);
  const { address, setAddress } = useContext(AddressContext);
  const navigate = useNavigate();

  useEffect(()=>{
    window.ethereum?.request({ method: 'eth_requestAccounts' })
    .then(res => {
      setAddress(res[0]);
    })
  },[]);

  useEffect(() => {
    if(address === null){
      navigate("/home");
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
        sources: [{ name: title.length > 0 ? title : video.name, file: video }],
      }
      : null
  );

  return (
    <React.Fragment>
      <TextField
        autoFocus
        margin="dense"
        type="text"
        label="Title"
        fullWidth
        variant="standard"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <TextField
        autoFocus
        margin="dense"
        type="text"
        label="Description"
        fullWidth
        variant="standard"
        sx={{ mt: 3 }}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />
      <Button
        sx={{ borderRadius: 1, mt: 3 }}
        variant="contained"
        startIcon={<DriveFolderUpload />}
        onClick={() => {
          inputFile.current.click();
        }}
      >
        Browse File
        <input
          type="file"
          id="file"
          ref={inputFile}
          style={{ display: "none" }}
          onChange={(e) => {
            setVideo(e.target.files[0]);
          }}
        />
      </Button>
      <Button variant="contained" sx={{ ml: 4, mt: 3 }} onClick={async() => {
        let response = await fetch("https://livepeer.studio/api/asset/request-upload",{
          method:"POST",
          headers:{
            "Content-Type":"application/json",
            "Authorization": `Bearer ${process.env.REACT_APP_LIVEPEER_API_KEY}`
          },
          body:JSON.stringify({
            name:title
          })
        });
        let data = await response.json();
        console.log(data);

        // ------------------------------
        const tusEndpoint = data.tusEndpoint;
        const url = data.url;
        const upload = new Upload(video,{
          endpoint:tusEndpoint,
          metadata:{
            title,
            filetype:"video/mp4"
          },
          uploadSize:video.size,
          onError(err){
            console.log("Error uploading file: ",err);
          },
          onProgress(bytesUploaded,bytesTotal){
            const percentage = ((bytesUploaded / bytesTotal) * 100).toFixed(2);
            console.log('Uploaded ' + percentage + '%');
          },
          async onSuccess() {
            const downloadUrl = `https://lp-playback.com/hls/${data.asset.playbackId}/video`;
            const livepeerApiUrl = "https://livepeer.studio/api/asset";
            let headers = new Headers();
            headers.append("Content-Type", "application/json");
            headers.append("Accept", "application/json");
            headers.append(
              "Authorization",
              `Bearer ${process.env.REACT_APP_LIVEPEER_API_KEY}`
            );
            fetch(livepeerApiUrl, {
              mode: "cors",
              method: "GET",
              headers: headers,
            }).then((resp) => resp.json()).then(async(assetData)=>{
              const web3 = new Web3(Web3.givenProvider);
              const contractAddress = "0x3D3c236EAcffB96769eb8507C041a63425d181Cd";
              const contract = await new web3.eth.Contract(ProxyVideoABI, contractAddress);

              let latestUpload = assetData.filter(assetItem=>assetItem.playbackId==data.asset.playbackId);
              let latestUploadObject = latestUpload[0];
              let videoId =latestUploadObject.id;
              let videoName = latestUploadObject.name;
              let videoDescription = description;
              let createdAt = web3.utils.toBN( String(latestUploadObject.createdAt));
              let playbackId = data.asset.playbackId;
              let videoSize = web3.utils.toBN(String(video.size));
          
              // console.log(videoId,videoName,videoDescription,createdAt,playbackId,downloadUrl);

              contract.methods.uploadVideo(
                videoId,
                videoName,
                videoDescription,
                createdAt,
                videoSize,
                downloadUrl,
                playbackId
              ).send({ from: address })
              .on('receipt', function () {
                console.log("received")
              })
            })
          },
        });

        upload.start();

        // let url = data.url;
        // await fetch(url,{
        //   method:"PUT",
        //   headers:{
        //     "Content-Type":"video/mp4"
        //   },
        //   body:video
        // });
        // console.log(data);
        // console.log("Video uploaded")
        // props.setOpen(false);


      }}>
        Create Asset
      </Button>
      {video ? <Typography sx={{ mt: 1 }} paragraph={true}> {video.name}</Typography> : <React.Fragment></React.Fragment>}
    </React.Fragment>
  );
}

export default FileUploadForm;
