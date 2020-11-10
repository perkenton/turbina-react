/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import playlist from '../constants/playlist';
import PlaylistItem from './PlaylistItem';

const Player = () => {
  const [ currentSong, setCurrentSong ] = useState(playlist[0])

  return (
    <div className="header__player-block player">
      <div className="player__controller">
        <button className="player__button player__button_play"></button>
        <div className="player__song-container">
          <div className="player__current-song">
            <p className="player__song-title">
            {currentSong.title} — {currentSong.author} <span style={{fontStyle: 'italic'}}>feat.</span> {currentSong.artist}
            </p>
          </div>
          <p className="player__song-duration">2:24</p>
          <div className="player__timebar">
            <div className="player__timebar player__timebar-progress"></div>
          </div>
        </div>
        <button className="player__button player__button_toggle">Релизы</button>
        <button className="player__button player__button_dropout"></button>
      </div>
      <div className="player__content-container">
        <h2 className="player__content-title">Релизы:</h2>
        
        <ul className="player__playlist">
          {playlist.map(item => <PlaylistItem
            key={item.id}
            item={item}
            onClick={item => {
              setCurrentSong(item)
            }}
          />)}
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