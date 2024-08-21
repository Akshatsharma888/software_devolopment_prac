import { useState, useEffect } from "react";

function DigitalClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="Clock-Container">
      <div className="clock">
        <span>{time.toLocaleTimeString()}</span>
      </div>
    </div>
  );
}

export default DigitalClock;