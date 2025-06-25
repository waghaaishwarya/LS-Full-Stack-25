import { useEffect, useState } from "react";

const Timer = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setSeconds(s => s + 1), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="text-center text-sm text-gray-700 p-2">
      Time spent on site: {seconds}s
    </div>
  );
};

export default Timer;
