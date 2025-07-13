import React, { useRef } from 'react';

function AudioPlayer() {
  const audioRef = useRef(null);

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  const pauseAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
  };

  return (
    <div>
      <audio ref={audioRef} src="path/to/your/audio.mp3" controls />
      <button onClick={playAudio}>Play</button>
      <button onClick={pauseAudio}>Pause</button>
    </div>
  );
}

export default AudioPlayer;