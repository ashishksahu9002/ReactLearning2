import { useState, useEffect } from "react";
import ClockHand from "./ClockHand";

const JSClock = () => {
  const [time, setTime] = useState(new Date());

  // Derive hand degrees directly from time, avoiding redundant state objects
  const [handDegrees, setHandDegrees] = useState({
    sec: { deg: 0, flag: true },
    min: { deg: 0, flag: true },
    hour: { deg: 0, flag: true },
  });

  // Update time every second
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Calculate hand degrees and transition flags whenever time changes
  useEffect(() => {
    const seconds = time.getSeconds();
    const minutes = time.getMinutes();
    const hours = time.getHours();

    // Calculate degrees for each hand
    const secDeg = (seconds / 60) * 360 + 90;
    // The `flag` ensures the transition animation is disabled when the hand
    // moves from 59 to 0 to prevent a long counter-clockwise animation.
    const secFlag = seconds !== 0; // If seconds is 0, we want to snap
                                  // back without transition, otherwise animate.

    const minDeg = (minutes / 60) * 360 + (seconds / 60) * 6 + 90;
    const minFlag = minutes !== 0 || seconds !== 0; // Same logic for minutes

    const hourDeg = (hours / 12) * 360 + (minutes / 60) * 30 + 90;
    // Hour hand doesn't typically need a reset flag as it's always moving forward

    setHandDegrees({
      sec: { deg: secDeg, flag: secFlag },
      min: { deg: minDeg, flag: minFlag },
      hour: { deg: hourDeg, flag: true }, // Hour hand always animates
    });
  }, [time]);

  return (
    <div
      className="
        bg-radial-[at_25%_25%] from-white to-zinc-900 to-75%
        h-screen
        w-screen
        flex
        items-center
        justify-center
      "
    >
      <div className="w-80 h-80 border-20 rounded-full border-white p-1 relative shadow-[10px_10px_20px_rgba(0,0,0,0.3)]">
        <div
          className="relative h-full w-full translate-y-[-1px] flex
        items-center"
        >
          {/* Pass the calculated degree and flag to ClockHand */}
          <ClockHand handType="hour" obj={handDegrees.hour} />
          <ClockHand handType="min" obj={handDegrees.min} />
          <ClockHand handType="sec" obj={handDegrees.sec} />
        </div>
      </div>
    </div>
  );
};

export default JSClock;