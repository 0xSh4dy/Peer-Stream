import React, { useEffect } from "react";
import { Button, TextField } from "@mui/material";
import { useState, useRef } from "react";
import DialogContentText from "@mui/material/DialogContentText";
import { DriveFolderUpload } from "@mui/icons-material";
import {Typography} from "@mui/material";
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
  const {
    mutate: createAsset,
    data: assets,
    status,
    progress,
    error,
  } = useCreateAsset(
    video
      ? {
          sources: [{ name: title.length>0?title:video.name, file: video }],
        }
      : null
  );
    useEffect(() => {
        if(props.approved === true && video !== null){
            console.log(video);
            // createAsset?.();
            props.setApproved(false);
        }
        else if(video !== null){
            props.closeDialog();
        }
    }, [props.approved]);
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
        <Button variant="contained" sx={{ml:4,mt:3}} onClick={()=>{
            createAsset?.();
        }}>
            Create Asset
        </Button>
      {video ? <Typography sx={{mt:1}} paragraph={true}> {video.name}</Typography> : <React.Fragment></React.Fragment>}
    </React.Fragment>
  );
}

export default FileUploadForm;
