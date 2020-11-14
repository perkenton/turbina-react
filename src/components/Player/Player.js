/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useRef } from "react";
import { throttle, formatTime } from "../../utils/utils";
import playlist from "../../constants/playlist";
import Playlist from "./Playlist";
import SongText from "./SongText";
import PlayerTimebar from "./PlayerTimebar";

const Player = ({ toggleRotation, ...props}) => {
  const [currentSong, setCurrentSong] = useState(playlist[0]);
  const [currentTime, setCurrentTIme] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [toggleState, setToggleState] = useState(false);
  const [isHidden, setIsHidden] = useState(true);

  const myAudio = useRef(null);

  const onTimeUpdate = throttle((e) => {
    setCurrentTIme(e.target.currentTime);
  }, 1000);

  const loadSong = (item) => {
    setCurrentSong(item);
    setCurrentTIme(0);
    setDuration(myAudio.current.duration);
    setIsPlaying(false);
    toggleRotation(false);
  };

  const checkSongStatus = () => {
    if (isPlaying) {
      myAudio.current.pause();
      setIsPlaying(false);
      toggleRotation(false);
    } else {
      myAudio.current.play();
      setIsPlaying(true);
      toggleRotation(true);
    }
  };

  return (
    <div className={`player player_extended ${isHidden ? "player_minified" : "player_blur"}`}>
      <div
        className={`player__album ${isHidden ? "player_element-hidden" : ""}`}
        style={{ backgroundImage: `url(${currentSong.albumImage})` }}
      />

      <div className="player__song-container">

        <button
          className={`player__button player__button_${isPlaying ? "stop" : "play"}`}
          onClick={checkSongStatus}
        />

        <div className="player__current-song">
          <p className="player__song-title">
            {currentSong.title} — {currentSong.author}
            <span className="player__song-feat"> feat.</span> {currentSong.artist}
          </p>
          <p className="player__song-duration">
            {currentTime === 0 ? formatTime(duration) : formatTime(currentTime)}
          </p>
          <PlayerTimebar
            duration={duration}
            currentTime={currentTime}
            onClick={(time) => {
              myAudio.current.currentTime = time;
            }}
          />
        </div>

        <div className="player__buttons-block">
          <a 
            className={`player__button player__button_clip ${
              !currentSong.clip ? "player__button-hidden" : ""
            }`} 
                href={currentSong.clip} 
                target="_blank" 
                rel="noreferrer">
          </a>

          <button
            className="player__button player__button_toggle"
            onClick={() => {
              setToggleState(!toggleState);
            }}
          >
            {toggleState ? "Релизы" : "Текст песни"}
          </button>
        </div>

        <button 
          className={`player__button player__button_dropout-${isHidden ? "open" : "close"}`}
          onClick={() => {
            setIsHidden(!isHidden);
          }}
        />
      </div>

      <div className={`player__content-container ${isHidden ? "player_element-hidden" : ""}`}>
        {toggleState ? (
          <SongText text={currentSong.songText} />
        ) : (
          <Playlist playlist={playlist} loadSong={loadSong} />
        )}
      </div>

      <audio
        ref={myAudio}
        className="player__audio"
        src={currentSong.audioFile}
        controls
        onTimeUpdate={onTimeUpdate}
        onLoadedData={() => {
          setDuration(myAudio.current.duration);
        }}
      >
        Your browser doesn't support html audio.
      </audio>
    </div>
  );
};

export default Player;
