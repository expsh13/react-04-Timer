import { ChangeEvent, useEffect, useRef, useState } from "react";
import { Button } from "./components/elements/Button/Button";
import styled from "styled-components";
import mp3 from "./mp3/jinglebells.mp3";

const SRoot = styled.div`
  margin: 0 auto;
`;

const SButtonWrap = styled.div`
  display: flex;
  gap: 10px;
`;

const audio = new Audio(mp3);

export const App = () => {
  const minutesRef = useRef<HTMLInputElement>(null);
  const secondsRef = useRef<HTMLInputElement>(null);
  const [time, setTime] = useState<number>(0);
  const [validation, setValidation] = useState(true);

  const [active, setActive] = useState(false);

  useEffect(() => {
    let id: NodeJS.Timeout | null = null;
    if (active && time > 0) {
      id = setInterval(() => {
        setTime((time) => time - 1);
      }, 1000);
    } else if (active && time === 0) {
      audio.play();
      setActive(false);
    }
    return () => {
      if (id) clearInterval(id);
    };
  }, [active, time]);

  const handleStart = () => {
    const minutes = Number(minutesRef.current?.value);
    const seconds = Number(secondsRef.current?.value);

    console.log(minutes, seconds);
    console.log(typeof minutes, typeof seconds);

    if (Number.isInteger(minutes) && Number.isInteger(seconds)) {
      const allSeconds = minutes * 60 + seconds;
      setTime(allSeconds);
      setActive(true);
      setValidation(true);
    } else {
      console.log("err");
      setValidation(false);
    }
  };

  const handleStopReset = () => {
    setActive((prev) => !prev);
  };

  const handleReset = () => {
    setTime(0);
    setActive(false);
  };

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.match(/^[0-9]+$/)) {
      setValidation(true);
    } else {
      setValidation(false);
    }
  };

  return (
    <SRoot>
      <p>分</p>
      <input type="text" ref={minutesRef} onChange={(e) => handleInput(e)} />
      <p>秒</p>
      <input type="text" ref={secondsRef} onChange={(e) => handleInput(e)} />
      {!validation && <p>半角数値を入力してください</p>}
      <p>
        残り{String(Math.floor(time / 60)).padStart(2, "0")}:
        {String(time % 60).padStart(2, "0")}
      </p>
      <SButtonWrap>
        <Button
          text="start"
          disable={!validation || active || time !== 0}
          onClick={handleStart}
        />
        <Button
          text={active ? "stop" : "restart"}
          disable={time === 0}
          onClick={handleStopReset}
        />
        <Button text="reset" disable={time === 0} onClick={handleReset} />
      </SButtonWrap>
    </SRoot>
  );
};
