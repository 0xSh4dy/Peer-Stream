import VideoCard from "../VideoCard"
import React from "react";
import Layout from "../Layout";
import { useContext } from "react";
import { AccountContext } from "../../App";
import {useState,useEffect} from "react";
import { searchAllQuery } from "../../query";

const Dashboard = () => {
    const {searchKeywords,setSearchKeywords } = useContext(AccountContext);
    const [videoData,setVideoData] = useState([]);
    const {startVideoSearch,setStartVideoSearch} = useContext(AccountContext);

    useEffect(()=>{
        fetch("https://api.studio.thegraph.com/query/42553/test-video/v0.0.1",{
            cors: "*", 
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(searchAllQuery)
        }).then(resp=>resp.json()).then((data)=>{
           let uploadedVideoData = data.data.videoUploadeds;
           uploadedVideoData.shift();
           setVideoData(uploadedVideoData);
        })
    },[]);

    useEffect(()=>{
        const searchQuery = {"query":`{\n  videoUploadeds(where: {title_contains: \"${searchKeywords}\"}) {\n    id\n    hash\n    title\n    description\n    location\n    category\n    thumbnailHash\n    date\n    author\n    blockNumber\n    blockTimestamp\n    transactionHash\n  }\n}`,"variables":null,"extensions":{"headers":null},"skip":1};

        fetch("https://api.studio.thegraph.com/query/42553/test-video/v0.0.1",{
            cors: "*",     
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(searchQuery)
        }).then(resp=>resp.json()).then((data)=>{
            setVideoData(data.data.videoUploadeds);
        })
    },[startVideoSearch])
    return (
        <Layout>
            <div className="container px-32">
                <div className="flex flex-wrap mt-12 space-y-20 space-x-5">
                    <div className="hidden"></div>
                    {
                        videoData.map(data=><VideoCard key={Math.random()} videoData={data} a/>)
                    }

                </div>
            </div>
        </Layout>
    )
}

export default Dashboard