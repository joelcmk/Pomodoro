/* eslint-disable react/jsx-filename-extension */
import React, { useState, useEffect } from 'react';
import ProgressBar from './ProgressBar';
import { bgRed, bgGreen } from '../constants/Index';

function Timer() {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [start, setStart] = useState(false);
  const [cycleNumber, setCycleNumber] = useState(1);
  const [background, setBackground] = useState(bgRed);
  const [color, setColor] = useState('red');

  const timerMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const timerSeconds = seconds < 10 ? `0${seconds}` : seconds;

  useEffect(() => {
    document.body.style.background = background;
  }, [background]);

  useEffect(() => {
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
      // Long Break
      setStart(false);
      setMinutes(15);
      setSeconds(0);
      setBackground(bgGreen);
      setColor('green');
    } else if (cycleNumber === 7) {
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
    </div>
  );
}

export default Timer;
