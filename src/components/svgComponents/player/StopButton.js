import * as React from "react";

function SvgStopButton(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 14 18" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1 0a1 1 0 00-1 1v16a1 1 0 001 1h2a1 1 0 001-1V1a1 1 0 00-1-1H1zm10 0a1 1 0 00-1 1v16a1 1 0 001 1h2a1 1 0 001-1V1a1 1 0 00-1-1h-2z"
        fill="#fff"
      />
    </svg>
  );
}

export default SvgStopButton;
