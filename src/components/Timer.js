import React, { useState, useEffect } from 'react';


function Timer() {

  var [minutes, setMinutes] = useState(1);
  const [seconds, setSeconds] = useState(0);
  const [displayMessage, setDisplayMessage] = useState(false);
  const [start, setStart] = useState(false);

  const timerMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const timerSeconds = seconds < 10 ? `0${seconds}` : seconds;
  const button = start ? 'START' : 'STOP';

  useEffect(() => {
    let interval = setInterval(() => {
      clearInterval(interval)

      if (start === false) {
        clearInterval(interval)
      } else
        if (seconds === 0) {
          if (minutes !== 0) {
            setSeconds(59)
            setMinutes(minutes - 1)
          } else {
            let minutes = displayMessage ? 24 : 4
            let seconds = 59

            setSeconds(seconds)
            setMinutes(minutes)
            setDisplayMessage(!displayMessage)
          }
        } else {
          setSeconds(seconds - 1)
        }
    }, 1000)
  }, [seconds, start])

  const stop = () => {
    setStart(false)
  }

  const startTimer = () => {
    setStart(true);
  }

  return (
    <div className="pomodoro">
      <div className="timer-box">
        <div className="message">
          {displayMessage && <div>Break time! You can start your next session in: </div>}
        </div>
        <div className="timer">
          {timerMinutes}:{timerSeconds}
        </div>
        <div className="button">
          {start
            ?
            <button onClick={stop}>STOP</button>
            :
            <button onClick={startTimer} >START</button>
          }
        </div>
      </div>
    </div >);
}

export default Timer;