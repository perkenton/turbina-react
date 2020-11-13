import React from "react";
import PlaylistItem from "./PlaylistItem";

const Playlist = ({ playlist, loadSong }) => {
  return (
    <ul className="player__playlist">
      {playlist.map((item) => (
        <PlaylistItem
          key={item.id}
          item={item}
          onClick={(item) => {
            loadSong(item)
          }}
        />
      ))}
    </ul>
  );
};

export default Playlist;
