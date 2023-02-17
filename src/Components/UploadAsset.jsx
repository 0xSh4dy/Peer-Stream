import {
  LivepeerProvider,
  useCreateAsset,
  useLivepeerProvider,
} from "@livepeer/react";
import React, { useState } from "react";
import { Player } from "@livepeer/react";


export default function CreateAndViewAsset() {
  const provider = useLivepeerProvider();
  const [video, setVideo] = useState(null);

  const {
    mutate: createAsset,
    data: assets,
    status,
    progress,
    error,
  } = useCreateAsset(
    video
      ? {
          sources: [{ name: video.name, file: video }],
        }
      : null
  );
  return (
    <div className="App">
      <h2>Hello, {provider.getConfig().name}</h2>
      <input
        type={"file"}
        onChange={(e) => {
          setVideo(e.target.files[0]);
        }}
      />
      <button
        disabled={status === "loading" || !createAsset}
        onClick={() => {
          createAsset?.();
        }}
      >
        Create Asset
      </button>
      {assets?.map((asset) => (
        <div key={asset.id}>
          <div>
            <div>Asset Name: {asset?.name} </div>
            <div>Playback URL: {asset?.playbackUrl}</div>
            <div>IPFS CID: {asset?.storage?.ipfs?.cid ?? "None"}</div>
            <div>Player Back ID: {asset?.playbackId}</div>
          </div>
        </div>
      ))}

      {error && <div>{error.message}</div>}
      <div className="video-player">
        {assets ? (
          <Player
            title={assets[0]?.name}
            playbackId={assets[0]?.playbackId}
            loop
            showPipButton
            objectFit="cover"
          />
        ) : null}

      </div>
    </div>
  );
}
