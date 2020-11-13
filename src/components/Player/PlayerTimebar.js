import React from "react";

const PlayerTimebar = ({ duration, currentTime, onClick }) => {
  const handleClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const xAxisPos = e.clientX - rect.left;
    const percentage = xAxisPos / rect.width * 100;
    const setTime = duration / 100 * percentage;
    onClick(setTime);
  };

  return (
    <div className="player__timebar" onClick={handleClick}>
      <div
        className="player__timebar-progress"
        style={{ width: `${currentTime / duration * 100}%` }}
      ></div>
    </div>
  );
};

export default PlayerTimebar;
