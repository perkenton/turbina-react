import React from "react";

const PlaylistItem = ({ item, onClick }) => {
  const { title, author, artist } = item;
  return (
    <li className="player__song" onClick={() => onClick(item)}>
      {title} — {author} <span style={{ fontStyle: "italic" }}>feat.</span> {artist}
    </li>
  );
};

export default PlaylistItem;
