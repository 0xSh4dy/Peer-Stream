import { useState, useRef } from "react";
import { TextField, Button } from "@mui/material";
import {
  DriveFolderUpload,
  OndemandVideo,
  CloudUpload,
} from "@mui/icons-material";
import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

const text =
  "Upload a recorded video or go live streaming with just a tap.";

export default function Modes() {
  const [open, setOpen] = useState(false);
  const inputFile = useRef(null);

  function ModeComponent() {
    return (
      <div className="modeBox w-screen h-screen flex flex-col justify-center items-center gap-y-5">
        <p
          className="modeBoxText w-1/4 text-center text-[white]"
          style={{
            fontFamily: "Roboto",
            fontSize: "18px",
            fontWeight: 400,
            lineHeight: "23.44px",
          }}
        >
          {text}
        </p>
        <div>
          <Button
            sx={{ borderRadius: 1 }}
            variant="contained"
            startIcon={<CloudUpload />}
            onClick={() => {
              openDialog();
            }}
          >
            Upload Video

          </Button>
        </div>
        <div>
          <img src="vectors/image.png" alt="" />
        </div>
        <div>
          <Button
            sx={{
              backgroundColor: "#EB4335", ':hover': {
                bgcolor: 'pink',
              }, borderRadius: 1
            }}
            variant="contained"
            startIcon={<OndemandVideo />}
          >
            Go Live
          </Button>
        </div>
      </div>
    );
  }

  const openDialog = () => {
    setOpen(true);
  };

  const closeDialog = () => {
    setOpen(false);
  };

  function FormDialog() {
    return (
      <div>
        <Dialog open={open} onClose={closeDialog}>
          <DialogTitle>Peer Stream</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              type="text"
              label="Title"
              fullWidth
              variant="standard"
            />
            <TextField
              autoFocus
              margin="dense"
              type="text"
              label="Description"
              fullWidth
              variant="standard"
              sx={{ mt: 3 }}
            />
            <Button
              sx={{ borderRadius: 1, mt: 3 }}
              variant="contained"
              startIcon={<DriveFolderUpload />}
              onClick={() => { inputFile.current.click() }}
            >
              Browse File
              <input
                type="file"
                id="file"
                ref={inputFile}
                style={{ display: "none" }}
                onChange={(e) => { }}
              />
            </Button>
          </DialogContent>
          <DialogActions>
            <Button onClick={closeDialog}>Cancel</Button>
            <Button onClick={closeDialog}>Done</Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }

  return (
    <div>
      <ModeComponent />
      <FormDialog />
    </div>
  );
}
