import { Button } from "@mui/material";
import { OndemandVideo,CloudUpload } from "@mui/icons-material";
import styles from "./Modes.css"

const text =
  "Choose your preferred mode of expression and get started. Upload a recorded video or go live streaming with just a tap.";
export default function Modes() {
  return (
    <div className="modeBox w-screen h-screen flex flex-col justify-center items-center gap-y-5">
      <p className="modeBoxText w-1/4">{text}</p>
      <div>
      <Button
        sx={{ borderRadius: 1 }}
        variant="contained"
        startIcon={<CloudUpload />}
      >
        Upload Video
      </Button>
      </div>
      <div>
    <Button sx={{borderRadius:1}} variant="contained" startIcon={<OndemandVideo/>}>
        Go Live
    </Button>
    </div>
    </div>
  );
}
