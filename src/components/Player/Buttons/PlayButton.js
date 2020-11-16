import React from "react";

function SvgPlayButton({ onClick }) {
  return (
    <svg className="player__button player__button_play" width="18px" height="15px" viewBox="0 0 16 20" fill="none" onClick={onClick}>
      <path
        d="M15.258 8.625c.99.651.99 2.099 0 2.75l-12.696 8.35C1.464 20.448 0 19.662 0 18.35V1.65C0 .338 1.464-.447 2.562.275l12.696 8.35z"
        fill="#FFF"
      />
    </svg>
  );
}

export default SvgPlayButton;
