/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useRef } from "react";
import throttle from "../utils/throttle";
import playlist from "../constants/playlist";
import PlayerTimebar from "./PlayerTimebar";
import PlaylistItem from "./PlaylistItem";
import PlayButton from "./svgComponents/player/PlayButton";

const Player = () => {
  const [currentSong, setCurrentSong] = useState(playlist[0]);
  const [currentTime, setCurrentTIme] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const myAudio = useRef(null);

  const onTimeUpdate = throttle((e) => {
    setCurrentTIme(e.target.currentTime);
  }, 1000);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const second = Math.floor(time % 60);
    const seconds = second < 9 ? `0${second}` : second

    return `${minutes}:${seconds}`
  }

  return (
    <div className="header__player-block player">
      
      <div className="player__album"></div>
      <button className={`player__button player__button_${isPlaying ? 'stop' : 'play'}`} 
        onClick={_ => {
          if (isPlaying) {
            myAudio.current.pause();
            setIsPlaying(false);
          } else {
            myAudio.current.play();
            setIsPlaying(true);
          }
        }}
      ></button>
      <div className="player__song-container">
        <div className="player__current-song">
          <p className="player__song-title">
            {currentSong.title} — {currentSong.author}{" "}
            <span style={{ fontStyle: "italic" }}>feat.</span> {currentSong.artist}
          </p>
        </div>
        <p className="player__song-duration">
          {currentTime === 0 ? formatTime(duration) : formatTime(currentTime)}
        </p>
        <PlayerTimebar
          duration={duration}
          currentTime={currentTime}
          onClick={time => {
            myAudio.current.currentTime = time;
          }}
        />
      </div>
      <button className="player__button player__button_clip"><PlayButton />Клипы</button>
      <button className="player__button player__button_toggle">Релизы</button>
      <button className="player__button player__button_dropout"></button>
      <div className="player__content-container">
      <h2 className="player__content-title">Релизы:</h2>
        <ul className="player__playlist">
          {playlist.map((item) => (
            <PlaylistItem
              key={item.id}
              item={item}
              onClick={(item) => {
                setCurrentSong(item);
                setCurrentTIme(0);
                setDuration(myAudio.current.duration);
                setIsPlaying(false);
              }}
            />
          ))}
        </ul>
      </div>
      <audio
        ref={myAudio}
        className="player__audio"
        src={currentSong.audioFile}
        controls
        onTimeUpdate={onTimeUpdate}
        onLoadedData={() => {
          setDuration(myAudio.current.duration)
        }}
      >
        audio not supported
      </audio>
      
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
