import Header from "../Header"
import SideBar from "../SideBar"
import VideoCard from "../VideoCard"
import React, { useState } from "react";



const Dashboard = () => {
    const [enableSidebar, setEnableSidebar] = useState(false);
    return (
        <>
            <Header enableSidebar={enableSidebar} setEnableSidebar={setEnableSidebar}/>
            <SideBar enableSidebar={enableSidebar} setEnableSidebar={setEnableSidebar}/>
            <div class="container px-32">
                <div class="flex flex-wrap mt-12 space-y-20 space-x-5">
                    <div className="hidden"></div>
                    <VideoCard />
                    <VideoCard />
                    <VideoCard />
                    <VideoCard />
                    <VideoCard />
                    <VideoCard />
                    <VideoCard />
                    <VideoCard />
                    <VideoCard />
                    <VideoCard />
                    <VideoCard />
                </div>
            </div>
            {/* </section> */}
        </>
    )
}

export default Dashboard