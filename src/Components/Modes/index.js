import { useState } from "react";
import { Button } from "@mui/material";
import {
  OndemandVideo,
  CloudUpload,
} from "@mui/icons-material";
import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import FileUploadForm from "../FileUploadForm";
import {
  LivepeerConfig,
  createReactClient,
  studioProvider,
} from "@livepeer/react";

const text =
  "Upload a recorded video or go live streaming with just a tap.";

export default function Modes() {
  const [open, setOpen] = useState(false);
  const [approved, setApproved] = useState(false);


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
              backgroundColor: "#EB4335", borderRadius: 1, ':hover': {
                bgcolor: 'pink',
              }
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

  const reactClient = createReactClient({
    provider: studioProvider({
      apiKey: process.env.REACT_APP_LIVEPEER_API_KEY,
    }),
  });

  function FormDialogButtons() {
    return (
      <React.Fragment>
        <Button onClick={closeDialog}>Cancel</Button>
        <Button onClick={() => {
          setApproved(true)
        }}>Done</Button>
      </React.Fragment>
    );
  }
  function FormDialog() {
    return (
      <div>
        <LivepeerConfig client={reactClient}>
          <Dialog open={open} onClose={closeDialog}>
            <DialogTitle>Peer Stream</DialogTitle>
            <DialogContent>
              <FileUploadForm approved={approved} setApproved={setApproved} closeDialog={closeDialog} open={open} setOpen={setOpen} />
            </DialogContent>
            <DialogActions>
              <FormDialogButtons />
            </DialogActions>
          </Dialog>
        </LivepeerConfig>
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
