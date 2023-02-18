import {Avatar} from "@mui/material"

const VideoCard = () => {
    return(
        <div className="p-10 w-100 md:p-2 flex flex-col justify-items-center space-y-4">
            <div className="relative">
                <img className="h-48 w-full rounded-lg" src="https://www.kindacode.com/wp-content/uploads/2022/06/night-sky.jpeg" />
                <h3 className="absolute bg-black rounded-lg text-xs text-white bottom-2 right-2 p-1">18:50</h3>
            </div>
            <div className="flex flex-row ml-4">
                <Avatar alt="Avatar" src="https://www.animesoulking.com/wp-content/uploads/2021/02/mushoku-tensei-740x414.jpg" />
                <div className="pl-4 text-sm">
                    <p className="video-title text-base font-bold text-slate-50">The most sensual video of all time</p>
                    <p className="channel mt-2 text-sm text-slate-300">Rias Gremory <br/>100K views • 2 months ago </p>
                </div>
            </div>
        </div>
    )
}


export default VideoCard