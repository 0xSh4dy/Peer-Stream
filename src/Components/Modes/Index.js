import { Button } from "@mui/material";
import { OndemandVideo, CloudUpload } from "@mui/icons-material";
import styles from "./Modes.css";

const text =
  "Choose your preferred mode of expression and get started. Upload a recorded video or go live streaming with just a tap.";

export default function Modes() {
  return (
    <div className="modeBox w-screen h-screen flex flex-col justify-center items-center gap-y-5">
      <p
        className="modeBoxText w-1/4 text-center"
        style={{
          fontFamily: "Roboto",
          fontSize: "20px",
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
        >
          Upload Video
        </Button>
      </div>
      <div>
        <img src="vectors/image.png" alt="Image not found"/>
      </div>
      <div>
        <Button
          style={{ backgroundColor: "#EB4335" }}
          sx={{ borderRadius: 1 }}
          variant="contained"
          startIcon={<OndemandVideo />}
        >
          Go Live
        </Button>
      </div>
    </div>
  );
}
