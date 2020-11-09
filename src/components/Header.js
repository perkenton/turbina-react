import React from "react";
import logo from "../images/logo.svg";
import turbinaLogo from "../images/turbina-logo.svg";
import Player from "./Player";
import StreamingLink from "./StreamingLink";
import {
  StreamingLinks,
  MainLogo,
} from '../constants/constants';

function Header() {
  return (
    <header className="header">
      <div className="header__top-wrapper">
        <a
          href={ MainLogo.link }
          target="_blank"
          rel="noreferrer"
          className="header__logo-link"
        >
          <img src={ logo } alt="Логотип магазина Маршак" className="header__logo" />
        </a>
        <div className="header__links-block">
          <input type="checkbox" id="checkbox" className="header__mobile-checkbox" />
          <label htmlFor="checkbox" className="header__mobile-label">
            <span className="header__mobile-submenu">Стриминги</span>
            <span className="header__mobile-cross">&times;</span>
          </label>

          <ul className="header__links">
            {StreamingLinks.map(({id, name, link}) => {
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
        <img src={turbinaLogo} alt="Логотип Турбины" className="header__logo-title" />
      </h1>

      <Player />
    </header>
  );
}

export default Header;
