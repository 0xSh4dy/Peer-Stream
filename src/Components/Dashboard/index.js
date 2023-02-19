import VideoCard from "../VideoCard"
import React from "react";
import Layout from "../Layout";


const Dashboard = () => {
    return (
        <Layout>
            <div className="container px-32">
                <div className="flex flex-wrap mt-12 space-y-20 space-x-5">
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
        </Layout>
    )
}

export default Dashboard