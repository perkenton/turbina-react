import React from "react";

const PlaylistItem = ({ item, onClick }) => {
  const { title, author, artist } = item;
  return (
    <li className="player__song" onClick={() => onClick(item)}>
      {title} — {author} <span className="player__song-feat">feat.</span> {artist}
    </li>
  );
};

export default PlaylistItem;
