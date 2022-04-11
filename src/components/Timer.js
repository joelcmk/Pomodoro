<<<<<<< HEAD
/* eslint-disable react/jsx-filename-extension */
import React, { useState, useEffect } from 'react';
import ProgressBar from './ProgressBar';
import { bgRed, bgGreen } from '../constants/Index';
=======
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-filename-extension */
import React, { useState, useEffect } from 'react';
import ProgressBar from './ProgressBar';
>>>>>>> parent of 93e5aa0... Updated code using Airbnb rules for eslint

function Timer() {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [start, setStart] = useState(false);
<<<<<<< HEAD
  const [cycleNumber, setCycleNumber] = useState(1);
  const [background, setBackground] = useState(bgRed);
=======
  const [x, setX] = useState(1); // X = Cycle number
  const [background, setBackground] = useState('#D8564F');
>>>>>>> parent of 93e5aa0... Updated code using Airbnb rules for eslint
  const [color, setColor] = useState('red');

  const timerMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const timerSeconds = seconds < 10 ? `0${seconds}` : seconds;

  useEffect(() => {
    document.body.style.background = background;
  }, [background]);

  useEffect(() => {
<<<<<<< HEAD
    const focusTime = cycleNumber === 1 || cycleNumber === 3 || cycleNumber === 5;
    const shortBrak = cycleNumber === 2 || cycleNumber === 4;
    if (focusTime) {
      setStart(false);
      setMinutes(25);
      setSeconds(0);
      setBackground(bgRed);
      setColor('red');
    } else if (shortBrak) {
      setStart(false);
      setMinutes(5);
      setSeconds(0);
      setBackground(bgGreen);
      setColor('green');
    } else if (cycleNumber === 6) {
=======
    if (x === 1) {
      setMinutes(25);
      setSeconds(0);
      setBackground('#D8564F');
      setColor('red');
    } else if (x === 2) {
      // Break
      setStart(false);
      setMinutes(5);
      setSeconds(0);
      setBackground('#4C9095');
      setColor('green');
    } else if (x === 3) {
      setStart(false);
      setMinutes(25);
      setSeconds(0);
      setBackground('#D8564F');
      setColor('red');
    } else if (x === 4) {
      // Break
      setStart(false);
      setMinutes(5);
      setSeconds(0);
      setBackground('#4C9095');
      setColor('green');
    } else if (x === 5) {
      setStart(false);
      setMinutes(25);
      setSeconds(0);
      setBackground('#D8564F');
      setColor('red');
    } else if (x === 6) {
>>>>>>> parent of 93e5aa0... Updated code using Airbnb rules for eslint
      // Long Break
      setStart(false);
      setMinutes(15);
      setSeconds(0);
<<<<<<< HEAD
      setBackground(bgGreen);
      setColor('green');
    } else if (cycleNumber === 7) {
=======
      setBackground('#4C9095');
      setColor('green');
    } else if (x === 7) {
>>>>>>> parent of 93e5aa0... Updated code using Airbnb rules for eslint
      // Repeat Cycle
      setStart(false);
      setCycleNumber(1);
    }
  }, [cycleNumber]);

  useEffect(() => {
    const interval = setInterval(() => {
      clearInterval(interval);

      if (start === false) {
        clearInterval(interval);
      } else if (seconds === 0) {
        if (minutes !== 0) {
          setMinutes(minutes - 1);
          setSeconds(59);
        } else {
          setStart(!start);
          setCycleNumber(cycleNumber + 1);
        }
      } else {
        setSeconds(seconds - 1);
      }
    }, 1000);
  }, [seconds, start]);

  // Stop timer
  const stop = () => {
    setStart(false);
  };

  // Start timer
  const startTimer = () => {
    setStart(true);
  };

  // Skip
  const skip = () => {
    setStart(false);
    setTimeout(() => {
      setCycleNumber(cycleNumber + 1);
    }, 1000);
  };

  return (
    <div className="pomodoro">
      <div className="timer-box">
        <div className="progress_box">
          <ProgressBar cycleNumber={cycleNumber} minutes={minutes} seconds={seconds} />
        </div>
        <div className="timer">
          {timerMinutes}
          :
          {timerSeconds}
        </div>
        <div className="button">
<<<<<<< HEAD
          {start ? (
            <button type="button" className={color} onClick={stop}>
              STOP
            </button>
          ) : (
            <button type="button" className={color} onClick={startTimer}>
              START
            </button>
          )}
          <div
            role="button"
            tabIndex={0}
            className={`skip ${color}`}
            onClick={skip}
            onKeyDown={skip}
          >
            &gt;
          </div>
        </div>
      </div>
=======
          {start
            ? <button type="button" className={color} onClick={stop}>STOP</button>
            : <button type="button" className={color} onClick={startTimer}>START</button>}
          <div className={`skip ${color}`} onClick={skip}>&gt;</div>
        </div>
      </div>
      <div className="progress_box">

        <ProgressBar x={x} minutes={minutes} seconds={seconds} />
      </div>
      {displayMessage && <div>Break time! You can start your next session in: </div>}
>>>>>>> parent of 93e5aa0... Updated code using Airbnb rules for eslint
    </div>
  );
}

export default Timer;
