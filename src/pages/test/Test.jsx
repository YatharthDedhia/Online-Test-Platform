// import React from "react";
import ReactDOM from "react-dom";
import Webcam from 'react-webcam';
import React, { useState } from 'react';
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

const videoConstraints = {
  width: 1280,
  height: 720,
  facingMode: 'user'
};

const WebLiveCapture = () => {
  const webcamRef = React.useRef(null);
  const [image, setImage] = useState('');
  const capture = React.useCallback(
    () => {
      const imageSrc = webcamRef.current.getScreenshot();
      setImage(imageSrc);
      // console.log('Captured');
    },
    [webcamRef]
  );

  return (
    <React.Fragment>
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        height={150}
        width={300}
        videoConstraints={videoConstraints}
      />

      <button className="hide" onClick={capture}>
        Capture photo
      </button>
    </React.Fragment>
  );
};

const Test = () => {
  return (
    <div className="timer-wrapper">
      <CountdownCircleTimer
        isPlaying
        duration={60}
        colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
        colorsTime={[60, 0.6 * 60, 0.3 * 60, 0]}
      //   onComplete={() => ({ shouldRepeat: true, delay: 1 })}
      >
        {children}
      </CountdownCircleTimer>
      <div className="image-capture">
        <WebLiveCapture />
      </div>
    </div>
  );
};
export default Test;
// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);
