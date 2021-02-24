import * as React from "react";
import { CountDownStyle } from "./style";

import { CountDownButton } from "../../atoms/Buttons";

const CountDown = () => {
  const [time, setTime] = React.useState(25 * 60);
  const [active, setActive] = React.useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const [minuteDecimal, minuteUnit] = String(minutes)
    .padStart(2, "0")
    .split("");
  const [secondDecimal, secondUnit] = String(seconds)
    .padStart(2, "0")
    .split("");

  React.useEffect(() => {
    if (active && time > 0) {
      setTimeout(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    }
    return () => clearTimeout();
  }, [active, time]);

  function handleStartCountDown() {
    setActive(true);
  }

  return (
    <div>
      <CountDownStyle>
        <div>
          <span>{minuteDecimal}</span>
          <span>{minuteUnit}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondDecimal}</span>
          <span>{secondUnit}</span>
        </div>
      </CountDownStyle>
      <CountDownButton
        handleClick={handleStartCountDown}
        children={"Iniciar um ciclo"}
      />
    </div>
  );
};

export default CountDown;
