import React from "react";
import PlaylistItem from "./PlaylistItem";

const Playlist = ({ playlist, loadSong }) => {
  if (playlist.length <= 1) return <h2 className="player__content-title ">Пока что у нас только 1 релиз.</h2>
    return  <>
      <h2 className="player__content-title ">Релизы:</h2>
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
    </>
};

export default Playlist;
