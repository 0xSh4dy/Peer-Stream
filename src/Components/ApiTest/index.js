import { useContext, useEffect, useState } from "react";
import Web3 from "web3";
import { ProxyVideoABI } from "../../constants";
import React from "react";
import { AddressContext } from "../../App";
import { useNavigate } from "react-router-dom";


const apiUrl = "https://livepeer.studio/api/asset";

const contractAddress = "0xb8a54a3793d0093b479a8e7ceff1043af06f27c0";

export default function ApiTest() {
  const { address, setAddress } = useContext(AddressContext);
  const navigate = useNavigate();

  useEffect(()=>{
    window.ethereum?.request({ method: 'eth_requestAccounts' })
    .then(res => {
      setAddress(res[0]);
    })
  },[]);

  useEffect(() => {
    if(address === null){
      // navigate("/home");
    }
  }, [address]);

  async function apiTestingInternal() {
    // const web3 = new Web3(Web3.providers.HttpProvider("https://eth-goerli.alchemyapi.io/v2/ArQ_sAgLhFHpZliIgRLea63OzPVWpP2g"));
    const web3 = new Web3(Web3.givenProvider);
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Accept", "application/json");
    headers.append(
      "Authorization",
      `Bearer ${process.env.REACT_APP_LIVEPEER_API_KEY}`
    );
    const contract = await new web3.eth.Contract(ProxyVideoABI, address);

    fetch(apiUrl, {
      mode: "cors",
      method: "GET",
      headers: headers,
    })
      .then((resp) => resp.json())
      .then((data) => {
        data.forEach((dat) => {
          let videoId = dat.id;
          let name = dat.name;
          let description =
            "This hit that ice cold Michelle Pffefier that white gold";
          let createdAt = web3.utils.toBN( String(dat.createdAt));
          let duration = web3.utils.toBN(String(Math.floor(dat.videoSpec.duration))); // in seconds
          let playbackId = dat.playbackId;
          let downloadUrl = dat.downloadUrl;
          contract.methods.indexVideo(
            videoId,
            name,
            description,
            createdAt,
            duration,
            downloadUrl,
            playbackId
          ).send({ from: address })
          .on('receipt', function () {
          });
        });
      });
  }

  return <React.Fragment>
    <button onClick={() => {if(address) apiTestingInternal(); }}>Test Me</button>
  </React.Fragment>;
}
