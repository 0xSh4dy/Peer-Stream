import Layout from "./Layout/Index"
import Home from "./Home/Index"
import { Divider, Avatar} from "@mui/material";
import { Button } from "react-ui";
import FormControl from '@mui/material/FormControl';
import InputLabel from "@mui/material/InputLabel";
import FormHelperText from "@mui/material/FormHelperText";
import Input from "@mui/material/Input";
import { padding } from "@mui/system";


export default function LiveStream(){
    let link = "https://lp-playback.com/hls/dfe1aanz93atxi4f/video";
    
    return (
    <Layout>
        {/* <Home></Home> */}
        <div className="flex flex-col h-screen w-fit p-4 mt-16 ">
            <iframe src={link} width={800} height={450}></iframe>
            <hr/>
            <div className="flex flex-row pt-8">
                <Avatar alt="Avatar" src="https://www.animesoulking.com/wp-content/uploads/2021/02/mushoku-tensei-740x414.jpg" />
                <div className="pl-4 text-sm">
                    <p className="video-title text-base font-bold text-slate-50">The most sensual video of all time</p>
                    <p className="channel mt-2 text-sm text-slate-300">Rias Gremory <br />100K views • 2 months ago </p>
                </div>
                <Button className="bg-blue-600 h-10 justify-self-end" variant="contained">Subscribe</Button>
            </div>
            <div>
                <p className="channel mt-2 text-sm text-slate-300">Lorem impsum</p>
            </div>
        </div>
        <div className="flex flex-col  top-0 mt-16 right-0 fixed h-screen w-fit bg-black">

            <FormControl sx={{width:400, padding:4}}>
                <InputLabel htmlFor="my-input">Live Chat</InputLabel>
                <Input id="my-input" aria-describedby="my-helper-text" />
            </FormControl>            
        </div>
    </Layout>
    )
}