import React, { useState } from 'react';


function Timer() {

  const [time, setTime] = useState('25')

  return (<div>
    {time}
  </div>);
}

export default Timer;