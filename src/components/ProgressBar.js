import React, { useState, useEffect } from "react";

// eslint-disable-next-line react/prop-types
function ProgressBar({ x, minutes, seconds }) {
  const [porcentage, setPorcentage] = useState();

  useEffect(() => {
    const test = minutes * 60 + seconds;
    if (x === 1 || x === 3 || x === 5) {
      setPorcentage(100 - (test * 100) / 1500);
    } else if (x === 2 || x === 4) {
      setPorcentage(100 - (test * 100) / 300);
    } else if (x === 6) {
      setPorcentage(100 - (test * 100) / 900);
    }
  }, [minutes, seconds, x]);

  return (
    <div className="progress_bar">
      <div className="progress">
        <div className="percentage" style={{ width: `${porcentage}%` }} />
      </div>
    </div>
  );
}

export default ProgressBar;
