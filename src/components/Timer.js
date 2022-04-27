import React, { useState, useEffect } from 'react';
import ProgressBar from './ProgressBar';
import { bgRed, bgGreen } from '../constants/Index';
import alarm from '../constants/alarm.mp3';
import click from '../constants/click.mp3';

function Timer() {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [start, setStart] = useState(false);
  const [cycleNumber, setCycleNumber] = useState(1);
  const [background, setBackground] = useState(bgRed);
  const [color, setColor] = useState('red');
  const [text, setText] = useState('Time to focus!');

  const timerMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const timerSeconds = seconds < 10 ? `0${seconds}` : seconds;

  const alarmSound = () => {
    const sound = new Audio(alarm);
    sound.play();
  };

  const clickSound = () => {
    const sound = new Audio(click);
    sound.play();
  };

  useEffect(() => {
    document.body.style.background = background;
  }, [background]);

  useEffect(() => {
    const breakAndFocusTime = () => {
      setStart(false);
      setSeconds(0);
      if (cycleNumber % 2 === 0) {
        setBackground(bgGreen);
        setColor('green');
        setText('Time to Relax!');
      } else {
        setBackground(bgRed);
        setColor('red');
        setText('Time to focus!');
      }
    };

    if (cycleNumber % 2 !== 0) {
      // Focus Time
      breakAndFocusTime();
      setMinutes(25);
    } else if (cycleNumber === 6) {
      // Long Break
      breakAndFocusTime();
      setMinutes(15);
    } else if (cycleNumber === 7) {
      // Repeat Cycle
      setStart(false);
      setCycleNumber(1);
    } else if (cycleNumber % 2 === 0) {
      // Short break
      breakAndFocusTime();
      setMinutes(5);
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
          alarmSound();
          // alert('Break Time!');
        }
      } else {
        setSeconds(seconds - 1);
      }
    }, 1000);
  }, [seconds, start]);

  // Stop timer
  const stop = () => {
    clickSound();
    setStart(false);
  };

  // Start timer
  const startTimer = () => {
    setStart(true);
    clickSound();
  };

  // Skip
  const skip = () => {
    clickSound();
    setStart(false);
    setTimeout(() => {
      setCycleNumber(cycleNumber + 1);
    }, 1000);
  };

  return (
    <div className="pomodoro">
      <span className="text">{text}</span>
      <ProgressBar
        cycleNumber={cycleNumber}
        minutes={minutes}
        seconds={seconds}
      />
      <div className="timer-box">
        <div>
          <div className="timer">
            {timerMinutes}:{timerSeconds}
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
    </div>
  );
}

export default Timer;
