/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useRef } from "react";
import { throttle, formatTime } from "../../utils/utils";
import playlist from "../../constants/playlist";
import Playlist from "./Playlist";
import SongText from "./SongText";
import PlayerTimebar from "./PlayerTimebar";
import PlayButton from "../svgComponents/player/PlayButton";

const Player = () => {
  const [currentSong, setCurrentSong] = useState(playlist[0]);
  const [currentTime, setCurrentTIme] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [toggleState, setToggleState] = useState(false);

  const myAudio = useRef(null);

  const onTimeUpdate = throttle((e) => {
    setCurrentTIme(e.target.currentTime);
  }, 1000);

  const loadSong = (item) => {
    setCurrentSong(item);
    setCurrentTIme(0);
    setDuration(myAudio.current.duration);
    setIsPlaying(false);
  };

  const checkSongStatus = () => {
    if (isPlaying) {
      myAudio.current.pause();
      setIsPlaying(false);
    } else {
      myAudio.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <div className="header__player-block player">
      <div
        className="player__album"
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
          <button
            className={`player__button player__button_clip ${
              !currentSong.clip ? "" : ""
            }`}
          >
            <a className="" href={currentSong.clip} target="_blank" rel="noreferrer">


            </a>
          </button>
          <button
            className="player__button player__button_toggle"
            onClick={() => {
              setToggleState(!toggleState);
            }}
          >
            {toggleState ? "Релизы" : "Текст песни"}
          </button>
        </div>

        <button className="player__button player__button_dropout" />
      </div>

      <div className="player__content-container">
        <h2 className="player__content-title ">{toggleState ? "Текст песни:" : "Релизы:"}</h2>
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
