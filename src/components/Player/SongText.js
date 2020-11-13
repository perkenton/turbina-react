import React from "react";

const SongText = ({ text }) => {
  return (
    <>
      <h2 className="player__content-title ">Текст песни:</h2>
      <p className="player__song-text">
        {text}
      </p>
    </>
  );
};

export default SongText;
