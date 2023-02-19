import { useContext, useEffect, useState } from "react";
import { PROXY_VIDEO_ABI } from "../../constants";
import React from "react";
import { AccountContext } from "../../App";
import { useNavigate } from "react-router-dom";
import Web3 from "web3";


const apiUrl = "https://livepeer.studio/api/asset";

const contractAddress = "0x5FD4aaf0106FC6dE615E6D1ABF60E58Ee7aC0E5e";

export default function ApiTest() {
  const { account, setAccount } = useContext(AccountContext);
  const navigate = useNavigate();


  useEffect(() => {
    window.ethereum?.request({ method: 'eth_requestAccounts' })
      .then(res => {
        setAccount(res[0]);
      })
  }, []);

  useEffect(() => {
    if (account === null) {
      // navigate("/home");
    }
  }, [account]);

  async function apiTestingInternal() {
    const web3 = new Web3(window.ethereum);
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Accept", "application/json");
    headers.append(
      "Authorization",
      `Bearer ${process.env.REACT_APP_LIVEPEER_API_KEY}`
    );
    const proxyPeerTube = await new web3.eth.Contract(PROXY_VIDEO_ABI, contractAddress);

    fetch(apiUrl, {
      mode: "cors",
      method: "GET",
      headers: headers,
    })
      .then((resp) => resp.json())
      .then((data) => {
        data.forEach((dat) => {
          console.log(dat);
          let videoId = dat.id;
          let name = dat.name;
          let description =
            "This hit that ice cold Michelle Pffefier that white gold";
          let createdAt = web3.utils.toBN(String(dat.createdAt));
          let duration = web3.utils.toBN(String(Math.floor(dat.videoSpec.duration))); // in seconds
          let playbackId = dat.playbackId;
          let downloadUrl = dat.downloadUrl;
          proxyPeerTube.methods.indexVideo(
            videoId,
            name,
            description,
            createdAt,
            duration,
            downloadUrl,
            playbackId
          ).send({ from: account })
            .on('receipt', function () {
              console.log("received")
            });
        });
      });
  }

  return <React.Fragment>
    <button onClick={() => { if (account) apiTestingInternal(); }}>Test Me</button>
  </React.Fragment>;
}
