import React from "react";

function StreamingLink(props) {
  return (
    <li className="header__link-item">
      <a
        href={ props.link }
        target="_blank"
        rel="noreferrer"
        className="header__link"
      >
        { props.name }
      </a>
    </li>
  )
}

export default StreamingLink;