import {
  LivepeerConfig,
  createReactClient,
  studioProvider,
} from "@livepeer/react";

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
        <NewStream/>
      </LivepeerConfig>
    </div>
  );
}
