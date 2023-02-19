import {
  LivepeerConfig,
  createReactClient,
  studioProvider,
} from "@livepeer/react";

import CreateAndViewAsset from "./UploadAsset";
import { NewStream } from "./Stream";

const reactClient = createReactClient({
  provider: studioProvider({
    apiKey: process.env.REACT_APP_LIVEPEER_API_KEY,
  }),
});

export default function LivePeerTest() {
  return (
    <div>
      <LivepeerConfig client={reactClient}>
        <CreateAndViewAsset/>
        {/* <NewStream/> */}
      </LivepeerConfig>
    </div>
  );
}
