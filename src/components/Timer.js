import React, { useState, useEffect } from 'react';


function Timer() {

  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [displayMessage, setDisplayMessage] = useState(false);
  const [start, setStart] = useState();

  const timerMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const timerSeconds = seconds < 10 ? `0${seconds}` : seconds;

  useEffect(() => {
    let interval = setInterval(() => {
      clearInterval(interval)

      if (start === false || start === undefined) {
        clearInterval(interval)
      } else
        if (seconds === 0) {
          if (minutes !== 0) {
            setSeconds(59)
            setMinutes(minutes - 1)
          } else {
            let minutes = displayMessage ? 25 : 5
            let seconds = 0

            setStart(!start)
            setSeconds(seconds)
            setMinutes(minutes)
            setDisplayMessage(!displayMessage)
          }
        } else {
          setSeconds(seconds - 1)
        }
    }, 1000)
  }, [seconds, start])

  //Stop timer
  const stop = () => {
    setStart(false)
  }

  //Start timer
  const startTimer = () => {
    setStart(true);
  }

  const message = () => {
    if (start) {
      return <h1>A Blue Heading</h1>;
    } else if (start === false) {
      return <div>Time to relax!</div>;
    }
  }

  return (
    <div className="pomodoro">
      <div className="timer-box">
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
      <div className="message">
        {displayMessage && <div>Break time! You can start your next session in: </div>}
        {message()}
      </div>
    </div >);
}

export default Timer;