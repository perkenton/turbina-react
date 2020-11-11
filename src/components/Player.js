/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import throttle from "../utils/throttle";
import playlist from "../constants/playlist";
import PlaylistItem from "./PlaylistItem";

const Player = () => {
  const [currentSong, setCurrentSong] = useState(playlist[0]);
  // currentTime setCurrentTime
  const [currentTime, setCurrentTIme] = useState(0);
  // duration setDuration
  const [duration, setDuration] = useState(0);
  // isPlaying
  const [isPlaying, setIsPlaying] = useState(false);

  const onTimeUpdate = throttle((e) => {
    console.log(e.target.duration);
    setCurrentTIme(e.target.duration - e.target.currentTime);
  }, 1000);

  return (
    <div className="header__player-block player">
      <div className="player__controller">
        <button className="player__button player__button_play"></button>
        <div className="player__song-container">
          <div className="player__current-song">
            <p className="player__song-title">
              {currentSong.title} — {currentSong.author}{" "}
              <span style={{ fontStyle: "italic" }}>feat.</span> {currentSong.artist}
            </p>
          </div>
          <p className="player__song-duration">
            {Math.floor(currentTime / 60)}:{Math.floor(currentTime - (Math.floor(currentTime / 60)) * 60)}
          </p>
          <div className="player__timebar">
            <div
              className="player__timebar player__timebar-progress"
              styles={{ width: (duration / 100) * currentTime }}
            ></div>
          </div>
        </div>
        <button className="player__button player__button_toggle">Релизы</button>
        <button className="player__button player__button_dropout"></button>
        <audio className="audios" src={currentSong.audioFile} controls onTimeUpdate={onTimeUpdate}>
          audio not supported
        </audio>
      </div>
      <div className="player__content-container">
        <h2 className="player__content-title">Релизы:</h2>

        <ul className="player__playlist">
          {playlist.map((item) => (
            <PlaylistItem
              key={item.id}
              item={item}
              onClick={(item) => {
                setCurrentSong(item);
              }}
            />
          ))}
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
};

export default Player;
