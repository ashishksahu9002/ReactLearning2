import { useRef, useEffect, useState } from "react";
import drumData from "./data";
import DrumKeys from "./DrumKeys";

const DrumBackgounds = () => {
  const [activeKey, setActiveKey] = useState(null);

   // A ref to hold all audio elements so we can control them from the parent
  const audioRefs = useRef({});

  // Effect for handling keyboard presses
  useEffect(() => {
    const handleKeyDown = (e) => {
      const pressedKey = drumData.find(key => key.keyCode === e.keyCode);
      if (pressedKey) {
        playSound(pressedKey.keyCode, pressedKey.drumSound);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []); // Empty dependency array means this runs once on mount

  const playSound = (keyCode, drumSound) => {
    const audio = audioRefs.current[keyCode]; // Get the specific audio element

    if (audio) {
      // Clear any previous timeout for this key if it was pressed rapidly
      // (This assumes you might want to manage separate timeouts if needed,
      // but for a single activeKey, the setActiveKey(null) after timeout is enough)

      audio.currentTime = 0; // Rewind to start
      audio.play();

      // Set the active key for visual highlight
      setActiveKey(keyCode);

      // Remove the highlight after a short duration
      // This is the setTimeout approach to prevent lag
      setTimeout(() => {
        setActiveKey(null);
      }, 100); // Adjust highlight duration as needed
    }
  };

  return (
    <div
      className="
        bg-radial-[at_25%_25%] from-white to-zinc-900 to-75%
        h-screen
        w-screen
        flex
        flex-col
        items-center
      "
    >
      <div className="text-white">
        <h1 className="text-5xl font-bold text-shadow-lg mt-8">Drum Keys</h1>
      </div>
      <div className="flex-1 flex items-center justify-center w-full min-h-32">
        {drumData.map((data) => (
        <DrumKeys
          key={data.keyCode} // Important for React list rendering
          data={data}
          isPlaying={activeKey === data.keyCode} // Pass down isPlaying prop
          onClick={() => playSound(data.keyCode, data.drumSound)} // Handle click
          // Pass the ref function to store audio element
          setAudioRef={(el) => (audioRefs.current[data.keyCode] = el)}
        />
      ))}
      </div>
    </div>
  );
};

export default DrumBackgounds;
