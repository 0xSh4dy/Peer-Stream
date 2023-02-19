import { useState } from "react";
import { IconButton, Snackbar } from "@mui/material";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

const CopyToClipboardButton = ({link}) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
    if(!link) {
      navigator.clipboard.writeText(window.location.toString());
    }
    else{
      navigator.clipboard.writeText(link);
    }
  };

  return (
    <>
      <IconButton  onClick={handleClick} color="primary">
        <ContentCopyIcon sx={{ color: "white", height:20, width:20 }} />
      </IconButton>
      <Snackbar
        message="Copied to clibboard"
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        autoHideDuration={2000}
        onClose={() => setOpen(false)}
        open={open}
      />
    </>
  );
};

export default CopyToClipboardButton;
