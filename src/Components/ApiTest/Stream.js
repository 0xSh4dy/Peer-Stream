import { Player, useCreateStream, useStream } from '@livepeer/react';
import { useEffect } from 'react';
 
import { useMemo, useState } from 'react';
 
export const NewStream = () => {
  const [streamName, setStreamName] = useState('');
  var out = useCreateStream(streamName ? { name: streamName } : null);
  var {
    mutate: createStream,
    data: stream,
    status,
  } = out;
  // localStorage.getItem("streamURL",out.data?.rtmpIngestUrl);
  // localStorage.getItem("streamKey",out.data?.streamKey);
  // localStorage.getItem("streamName",out.variables?.name);
  useEffect(()=>{

  },[])
  console.log(out)
  // if(out.isSuccess){
  //   localStorage.setItem("streamDetails",JSON.stringify(out));
  //   console.log("Kek");
  // }
  // if(localStorage.getItem("streamDetails")){
  //   out = JSON.parse(localStorage.getItem("streamDetails"));
  //   // console.log(out);
  //   // console.log("Lmao");
  // }
  const isLoading = useMemo(() => status === 'loading', [status]);
  return (
    <div>
      <input
        type="text"
        placeholder="Stream name"
        onChange={(e) => setStreamName(e.target.value)}
      />

      {stream?.playbackId && (
        <Player
          title={stream?.name}
          playbackId={stream?.playbackId}
          autoPlay
          muted
        />
      )}
 
      <div>
        {!stream && (
          <button
            onClick={() => {
              createStream?.();
              
              // console.log(out);
              // localStorage.setItem("StreamName",out.variables.name);
            }}
            disabled={isLoading || !createStream}
          >
            Create Stream
          </button>
        )}
      </div>
    </div>
  );
};