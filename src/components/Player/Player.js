/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useRef } from "react";
import { throttle, formatTime } from "../../utils/utils";
import playlist from "../../constants/playlist";
import Playlist from "./Playlist";
import SongText from "./SongText";
import PlayerTimebar from "./PlayerTimebar";
import Buttons from "./Buttons/Buttons";
import classNames from 'classnames';

const Player = ({ toggleRotation }) => {
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
    isPlaying ? myAudio.current.pause() : myAudio.current.play();
    setIsPlaying(!isPlaying);
    toggleRotation(!isPlaying);
  };

  return (
    <div
      className={classNames("player player_extended", {
        player_minified: isHidden,
        player_blur: !isHidden,
      })}
    >
      <div
        className={ classNames('player__album', { "player_element-hidden": isHidden }) }
        style={{ backgroundImage: `url(${currentSong.albumImage})` }}
      />

      <div className="player__song-container">

        {isPlaying ? (
          <Buttons.StopButton onClick={checkSongStatus} />
        ) : (
          <Buttons.PlayButton onClick={checkSongStatus} />
        )}
        
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
            className={ classNames('player__button player__button_clip', { "player__button-hidden": !currentSong.clip }) }
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

        {isHidden ? (
          <Buttons.OpenButton
            onClick={() => {
              setIsHidden(!isHidden);
            }}
          />
        ) : (
          <Buttons.CloseButton
            onClick={() => {
              setIsHidden(!isHidden);
            }}
          />
        )}
      </div>

      <div className={ classNames("player__content-container", { "player_element-hidden" : isHidden }) }>
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
