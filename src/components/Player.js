/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

function Player() {
  return (
    <div className="header__player-block player">
      <div className="player__container">
        <button className="player__button player__button_play"></button>
        <div className="player__song-container">
          <div className="player__current-song">
            <p className="player__song-title">
              Контур — Хадн Дадн feat. Варя Карпова и Федя Быстров
            </p>
          </div>
          <p className="player__song-duration">2:24</p>
          <div className="player__progress-bar">
            <div className="player__progress-bar-bg"></div>
            <div className="player__progress-bar-bg player__progress-bar-progress"></div>
          </div>
        </div>
        <button className="player__button player__button_toggle">Релизы</button>
        <button className="player__button player__button_dropout"></button>
      </div>
      <div className="player__content-container">
        <h2 className="player__content-title">Релизы:</h2>
        <ul className="player__playlist">
          <li className="player__song">
            <a href="#" className="player__song-link">
              Лодка — СБПЧ feat. Маруся Романова
            </a>
          </li>
          <li className="player__song">
            <a href="#" className="player__song-link">
              Кирпичи — Инди группа feat. Пётр Сковородников
            </a>
          </li>
          <li className="player__song">
            <a href="#" className="player__song-link">
              Лодка — СБПЧ feat. Маруся Романова
            </a>
          </li>
          <li className="player__song">
            <a href="#" className="player__song-link">
              Лодка — СБПЧ feat. Маруся Романова
            </a>
          </li>
        </ul>
      </div>
      {/* <div className="player__content-container">
                <h2 className="player__content-title">Текст песни:</h2>
                <p className="player__song-text">
                  Мой милый, милый мальчик, Моя милая, милая девочка. Никогда не знаешь, что будет дальше
                <p>
              </div> */}
    </div>
  );
}

export default Player;