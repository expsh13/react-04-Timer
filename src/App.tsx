import { useEffect, useRef, useState } from "react";
import { Button } from "./components/elements/Button/Button";

export const App = () => {
  const minutesRef = useRef<HTMLInputElement>(null);
  const secondsRef = useRef<HTMLInputElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    // const timer = setInterval(() => {
    //   console.log("test");
    // }, 1000);
    // return () => clearInterval(timer);
  }, []);

  const handleStartStop = () => {
    const changeActive = !active;
    setActive(changeActive);
    if (changeActive) {
      console.log("active");
    } else {
      console.log("no-active");
    }
  };

  return (
    <>
      <p>分</p>
      <input type="number" ref={minutesRef} />
      <p>秒</p>
      <input type="number" ref={secondsRef} />
      <p>
        time→{minutes}:{seconds}
      </p>
      <Button text={active ? "stop" : "start"} onClick={handleStartStop} />
      <Button text="restart" />
    </>
  );
};
