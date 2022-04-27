/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';

function ProgressBar({ cycleNumber, minutes, seconds }) {
  const [porcentage, setPorcentage] = useState();

  useEffect(() => {
    const progress = minutes * 60 + seconds;
    if (cycleNumber === 1 || cycleNumber === 3 || cycleNumber === 5) {
      setPorcentage(100 - (progress * 100) / 1500);
    } else if (cycleNumber === 2 || cycleNumber === 4) {
      setPorcentage(100 - (progress * 100) / 300);
    } else if (cycleNumber === 6) {
      setPorcentage(100 - (progress * 100) / 900);
    }
  }, [minutes, seconds, cycleNumber]);

  return (
    <div className="progress_bar">
      <div className="progress">
        <div className="percentage" style={{ width: `${porcentage}%` }} />
      </div>
    </div>
  );
}

export default ProgressBar;
