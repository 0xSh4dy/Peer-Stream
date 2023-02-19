import React from "react";
import {
  Box,
  Button,
  Input,
  Typography,
  Avatar,
  IconButton,
} from "@mui/material";
import { Player, useCreateStream } from "@livepeer/react";
import { useEffect } from "react";
import { useMemo, useState, useCallback } from "react";
import Layout from "../Layout";
import CopyToClipboardButton from "../CopyToClipboardButton";

export const NewStream = () => {
  const [streamName, setStreamName] = useState("");
  const [done, setDone] = useState(false);
  var out = useCreateStream(streamName ? { name: streamName } : null);
  var { mutate: createStream, data: stream, status } = out;

  const preventRefresh = useCallback(
    (e) => {
      if (out.isSuccess && streamName !== "") {
        let event = e || window.event;
        // console.log("entered");
        event.preventDefault();
        let confirmationMsg = "Your Stream Settings may get lost";
        event.returnValue = confirmationMsg;
        return confirmationMsg;
      }
    },
    [streamName, out]
  );
  useEffect(() => {
    window.addEventListener("beforeunload", preventRefresh);
    return () => {
      window.removeEventListener("beforeunload", preventRefresh);
    };
  }, [preventRefresh]);

  // console.log(out);

  const isLoading = useMemo(() => status === "loading", [status]);
  return (
    <Layout>
      <div
        style={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        {!done ? (
          <React.Fragment>
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1 },
                display: "flex",
                justifyContent: "center",
              }}
              noValidate
              autoComplete="off"
            >
              <Input
                placeholder="Add Stream Name"
                sx={{ width: 400 }}
                onChange={(e) => setStreamName(e.target.value)}
              />
            </Box>
            <Button
              variant="outlined"
              color="secondary"
              sx={{
                mt: 2,
              }}
              onClick={() => {
                createStream?.();
                setDone(true);
              }}
              disableElevation
              disabled={isLoading || !createStream}
            >
              Create Stream
            </Button>
          </React.Fragment>
        ) : null}

        {stream?.playbackId && (
          <React.Fragment>
            {window.alert("Please copy the stream key to your OBS Studio. Stream server is rtmp://rtmp.livepeer.com/live")}
            <Player
              title={stream?.name}
              playbackId={stream?.playbackId}
              autoPlay
              muted
            />
            <div className="flex flex-row pt-4 w-full justify-between px-40">
              <div className="flex ">
                <Avatar
                  alt="Avatar"
                  src="https://www.animesoulking.com/wp-content/uploads/2021/02/mushoku-tensei-740x414.jpg"
                />
                <div className="pl-4 text-sm">
                  <p className="video-title text-base font-bold text-slate-50">
                    {streamName}
                  </p>
                  <p className="channel mt-2 text-sm text-slate-300">
                    Rias Gremory <br />
                    100K views • 2 months ago{" "}
                  </p>
                </div>
              </div>
              <div className="w-1/2 flex justify-between">
                <Button
                  className="h-10 w-30 pl-4 rounded-md px-4"
                  variant="contained"
                  sx={{ backgroundColor: "#64748B" }}
                >
                  Copy Stream Link{" "}
                  <CopyToClipboardButton
                    link={"https://lvpr.tv/?v=" + out.data.playbackId}
                  />{" "}
                </Button>
                <Button
                  className="h-10 w-30 pl-4 rounded-md right-0"
                  variant="contained"
                  sx={{ backgroundColor: "#64748B" }}
                >
                  Copy Stream Key{" "}
                  <CopyToClipboardButton link={out.data.streamKey} />{" "}
                </Button>
              </div>
            </div>
          </React.Fragment>
        )}
      </div>
    </Layout>
  );
};
