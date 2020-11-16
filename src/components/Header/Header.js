import React, { useState } from "react";
import { use100vh } from 'react-div-100vh';
import MainLogo from './logos/MainLogo';
import TurbinaLogo from './logos/TurbinaLogo';
import Player from "../Player/Player";
import StreamingLink from "../StreamingLink";
import classnames from "classnames";
import {
  STREAMING_LINKS,
  MAIN_LOGO,
} from '../../constants/constants';

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
          <MainLogo />
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
        <TurbinaLogo />
      </h1>
      <div className= { classnames('header__colored-ring', { 'header__colored-ring_rotating' : isRotating })}></div>
      <div className= { classnames('header__rotation', { 'header__rotation_rotating': isRotating })}></div>   

      <Player toggleRotation = { toggleRotation }/>
    </header>
  );
}

export default Header;
