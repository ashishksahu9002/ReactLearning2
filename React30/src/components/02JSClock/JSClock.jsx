import { useState, useEffect } from "react";
import ClockHand from "./ClockHand";

const JSClock = () => {
  const [time, setTime] = useState(new Date());

  const [secObject, setSecObject] = useState({
    prevTime: 0,
    deg: 0,
    flag: true,
  });

  const [minObject, setMinObject] = useState({
    prevTime: 0,
    deg: 0,
    flag: true,
  });

  const [hourObject, setHourObject] = useState({
    prevTime: 0,
    deg: 0,
    flag: true,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let flag = true;
    if (time.getSeconds() === 0 && secObject.prevTime === 59) flag = false;
    setSecObject({
      flag: flag,
      prevTime: time.getSeconds(),
      deg: (time.getSeconds() / 60) * 360 + 90,
    });

    if (time.getMinutes() === 0 && minObject.prevTime === 59) flag = false;
    setMinObject({
      flag: flag,
      prevTime: time.getMinutes(),
      deg: (time.getMinutes() / 60) * 360 + (time.getSeconds() / 60) * 6 + 90,
    });

    setHourObject((prev) => ({
      ...prev,
      deg: (time.getHours() / 12) * 360 + (time.getMinutes() / 60) * 30 + 90,
    }));
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
          <ClockHand handType="hour" obj={hourObject} />
          <ClockHand handType="min" obj={minObject} />
          <ClockHand handType="sec" obj={secObject} />
        </div>
      </div>
    </div>
  );
};

export default JSClock;
