import React from "react";

const PlaylistItem = ({ item, onClick }) => {

  const { title, author, artist } = item;
  return (
    <li className="player__song">
      <a href="#" className="player__song-link" onClick={() => onClick(item)}>
        {title} — {author} <span style={{fontStyle: 'italic'}}>feat.</span> {artist}
      </a>
    </li>
  );
};


export default PlaylistItem;