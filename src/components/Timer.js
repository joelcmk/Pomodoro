import React, { useState, useEffect } from 'react';


function Timer() {

  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [displayMessage, setDisplayMessage] = useState(false);

  const timerMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const timerSeconds = seconds < 10 ? `0${seconds}` : seconds;

  useEffect(() => {
    setTimeout(function timer() {
      if (seconds === 0) {
        if (minutes !== 0) {
          setSeconds(59);
          setMinutes(minutes - 1);
        } else {
          let minutes = displayMessage ? 24 : 4;

          setMinutes(minutes);
          setSeconds(59);
          setDisplayMessage(!displayMessage);
        }
      } else {
        setSeconds(seconds - 1)
      }
    }, 1000)
  }, [seconds])

  return (
    <div className="pomodoro">
      <div className="message">
        {displayMessage && <div>Break time! You can start your next session in: </div>}
      </div>
      <div className="timer">
        {timerMinutes}:{timerSeconds}
      </div>
    </div>);
}

export default Timer;