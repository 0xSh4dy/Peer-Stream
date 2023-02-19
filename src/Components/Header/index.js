import { Avatar, IconButton, Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import peerStream from "../../assets/peerStream.svg";

const Header = ({ enableSidebar, setEnableSidebar }) => {
  return (
    <div className="z-10 fixed w-screen top-0 bg-[#121212] py-1 px-8  flex items-center justify-between border-b border-b-[1px] ">

      <div className="flex items-center justify-center">

        <IconButton
          onClick={() => {
            setEnableSidebar(!enableSidebar);
          }}
          sx={{ color: "white" }}
          aria-label="notifs"
        >
          <MenuIcon />
        </IconButton>
        <Box
          component="img"
          sx={{
            height: 20,
            marginLeft: 2
          }}
          alt="PeerStream"
          src={peerStream}
        />
      </div>

      <div className="">
        <div className="border rounded overflow-hidden flex ">
          <input
            type="text"
            className="px-4 py-1 bg-opacity-0 text-white bg-black w-[40vw]"
            placeholder="Search"
          />
          <button className="flex items-center justify-center px-4 border-l ">
            <svg
              className="h-4 w-4 text-grey-dark"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
            </svg>
          </button>
        </div>
      </div>
      <div className="space-x-4">
        <IconButton sx={{ color: "white" }} aria-label="notifs">
          <NotificationsIcon />
        </IconButton>
        <IconButton aria-label="avatar">
          <Avatar
            alt="Avatar"
            src="https://www.animesoulking.com/wp-content/uploads/2021/02/mushoku-tensei-740x414.jpg"
          />
        </IconButton>
      </div>
    </div>
  );
};

export default Header;
