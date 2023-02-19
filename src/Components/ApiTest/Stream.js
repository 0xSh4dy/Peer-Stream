import { Player, useCreateStream } from '@livepeer/react';
 
import { useMemo, useState } from 'react';
 
export const NewStream = () => {
  const [streamName, setStreamName] = useState('');
  const out = useCreateStream(streamName ? { name: streamName } : null);
  const {
    mutate: createStream,
    data: stream,
    status,
  } = out;
  console.log(out)
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