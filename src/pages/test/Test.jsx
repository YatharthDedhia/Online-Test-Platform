import React from "react";
import ReactDOM from "react-dom";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

import './css/timer.css';

const renderTime = ({ remainingTime }) => {
  if (remainingTime === 0) {
    return <div className="timer">Too late...</div>;
  }

  return (
    <div className="timer">
      <div className="text">Remaining</div>
      <div className="value">{remainingTime}</div>
      <div className="text">seconds</div>
    </div>
  );
};
const children = ({ remainingTime }) => {
    const hours = Math.floor(remainingTime / 3600)
    const minutes = Math.floor((remainingTime % 3600) / 60)
    const seconds = remainingTime % 60
  
    return `${hours}:${minutes}:${seconds}`
  }

const Test=()=> {
  return (
      <div className="timer-wrapper">
        <CountdownCircleTimer
          isPlaying
          duration={60}
          colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
          colorsTime={[60, 0.6*60, 0.3*60, 0]}
        //   onComplete={() => ({ shouldRepeat: true, delay: 1 })}
        >
          {children}
        </CountdownCircleTimer>
      </div>
  );
};
export default Test;
// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);
