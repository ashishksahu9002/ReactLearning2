import { useRef, useEffect, useState } from "react";

const DrumKeys = ({ data }) => {
  const { keyCode, charKey, drumSound } = data;
  const [isPlaying, setIsPlaying] = useState(false)

  const audioRef = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.keyCode === keyCode) {
        console.log(`Key ${charKey} pressed. Playing: ${drumSound}`);
        playSound();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [keyCode]);

  const playSound = () => {
    if (audioRef.current) {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      audioRef.current.currentTime = 0; // Rewind to start
      audioRef.current.play();
      setIsPlaying(true)
      timeoutRef.current = setTimeout(() => {
        setIsPlaying(false);
      }, 100);
    }
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div
      data-key={keyCode}
      onClick={playSound}
      className={`border-4 border-black rounded-lg m-4 text-xl p-4
        transition-transform duration-75 ease-linear w-40 text-center
        text-white bg-black/40 shadow-[0_0_8px_black] ${isPlaying ? 'playing' : ''} `}
    >
      <audio
        ref={audioRef}
        src={`drumKitAssets/sounds/${drumSound}.wav`}
        preload="auto"
        // onEnded={() => setIsPlaying(false)}
      />
      <kbd className="block text-6xl">{charKey}</kbd>
      <span className="sound uppercase tracking-wider text-yellow-400 text-base">
        {drumSound}
      </span>
    </div>
  );
};

export default DrumKeys;
