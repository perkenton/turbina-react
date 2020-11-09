import * as React from "react";

function MainLogo(props) {
  return (
    <svg className="header__logo" viewBox="0 0 50 50" fill="none" {...props} >
      <path
        d="M0 1.989V50h50L48.225 0h-5.917l-1.48 17.046H29.29l-.888-15.057-8.284-.569 1.184 15.626H8.876L6.805 1.42 0 1.99z"
        fill={props.fill || '#FFF'}
        stroke={props.stroke || '#FFF'}
        strokeWidth={props.strokeWidth}
      />
    </svg>
  );
}

export default MainLogo;
