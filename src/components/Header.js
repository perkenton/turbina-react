import React, { useState } from "react";
import { use100vh } from 'react-div-100vh'
import svgComponents from "./svgComponents/svgComponents";
import Player from "./Player/Player";
import StreamingLink from "./StreamingLink";
import {
  STREAMING_LINKS,
  MAIN_LOGO,
} from '../constants/constants';

function Header() {
  const [isRotating, setRotating] = useState(false);

  function DesireHeaderHeight() {
    const height = use100vh();
    return (document.body.clientWidth > 768) ? height - 10 : height - 8;
  }

  function toggleRotation(shouldRotate) {
    setRotating(shouldRotate);
  }

  return (
    <header className="header" style={{ height: DesireHeaderHeight() }}>
      <div className="header__top-wrapper">
        <a
          href={ MAIN_LOGO.link }
          target="_blank"
          rel="noreferrer"
          className="header__logo-link"
        >
          <svgComponents.MainLogo />
        </a>

        <div className="header__links-block">
          <input type="checkbox" id="checkbox" className="header__mobile-checkbox" />
          <label htmlFor="checkbox" className="header__mobile-label">
            <span className="header__mobile-submenu">Стриминги</span>
            <span className="header__mobile-cross">&times;</span>
          </label>

          <ul className="header__links">
            {STREAMING_LINKS.map(({id, name, link}) => {
              return (
                <StreamingLink
                  key={id}
                  name={name}
                  link={link}
                />
              );
            })}
          </ul>
        </div>
      </div>

      <h1 className="header__title">
        <svgComponents.TurbinaLogo />
      </h1>
      <div className= { isRotating ? "header__colored-ring header__colored-ring_rotating" : "header__colored-ring" }></div>
      <div className= { isRotating ? "header__rotation header__rotation_rotating" : "header__rotation" }></div>      

      <Player toggleRotation = { toggleRotation }/>
    </header>
  );
}

export default Header;
