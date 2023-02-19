import { Avatar, IconButton } from "@mui/material"
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import CloseIcon from '@mui/icons-material/Close';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80vw',
    height: '85vh',
    bgcolor: 'background.paper',
    p: 2,
  };

const VideoCard = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const link = "https://lp-playback.com/hls/dfe1aanz93atxi4f/video"

    return (
        <div className="p-10 w-100 md:p-2 flex flex-col justify-items-center space-y-4">
            <div className="relative">
                <img className="h-48 w-full rounded-lg" src="https://www.kindacode.com/wp-content/uploads/2022/06/night-sky.jpeg" alt="" onClick={handleOpen}  />
                <h3 className="absolute bg-black rounded-lg text-xs text-white bottom-2 right-2 p-1">18:50</h3>
            </div>
            <div className="flex flex-row ml-4">
                <Avatar alt="Avatar" src="https://www.animesoulking.com/wp-content/uploads/2021/02/mushoku-tensei-740x414.jpg" />
                <div className="pl-4 text-sm">
                    <p className="video-title text-base font-bold text-slate-50">The most sensual video of all time</p>
                    <p className="channel mt-2 text-sm text-slate-300">Rias Gremory <br />100K views • 2 months ago </p>
                </div>
            </div>
            <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>

            <Typography sx={{paddingLeft:2, color:"#cfcfcf"}} id="transition-modal-title" variant="h6" component="h2">
                Bhai koi mast title

                <IconButton sx={{position:"fixed",right:"0",top:'0',color:"#808080"}} onClick={handleClose}>
                    <CloseIcon/>
                </IconButton>
            </Typography>

            <iframe className="mt-4" src={link} width={'100%'} height={'90%'}></iframe>

          </Box>
        </Fade>
      </Modal>
        </div>
    )
}


export default VideoCard