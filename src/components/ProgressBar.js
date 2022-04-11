<<<<<<< HEAD
/* eslint-disable react/prop-types */
=======
/* eslint-disable no-mixed-operators */
>>>>>>> parent of 93e5aa0... Updated code using Airbnb rules for eslint
/* eslint-disable react/jsx-filename-extension */
import React, { useState, useEffect } from 'react';

function ProgressBar({ cycleNumber, minutes, seconds }) {
  const [porcentage, setPorcentage] = useState();

  useEffect(() => {
<<<<<<< HEAD
    const progress = minutes * 60 + seconds;
    if (cycleNumber === 1 || cycleNumber === 3 || cycleNumber === 5) {
      setPorcentage(100 - (progress * 100) / 1500);
    } else if (cycleNumber === 2 || cycleNumber === 4) {
      setPorcentage(100 - (progress * 100) / 300);
    } else if (cycleNumber === 6) {
      setPorcentage(100 - (progress * 100) / 900);
=======
    const test = minutes * 60 + seconds;
    if (x === 1 || x === 3 || x === 5) {
      setPorcentage(100 - (test * 100 / 1500));
    } else if (x === 2 || x === 4) {
      setPorcentage(100 - (test * 100 / 300));
    } else if (x === 6) {
      setPorcentage(100 - (test * 100 / 900));
>>>>>>> parent of 93e5aa0... Updated code using Airbnb rules for eslint
    }
  }, [minutes, seconds, cycleNumber]);

  return (
    <div className="progress_bar">
      <div className="progress"><div className="percentage" style={{ width: `${porcentage}%` }} /></div>
    </div>
  );
}

export default ProgressBar;
