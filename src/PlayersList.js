import React from "react";
import players from "./players";
import Player from "./Player";

const PlayersList = () => {
  return (
    <div className="players-container">
      {players.map((p, i) => (
        <Player key={i} {...p} />
      ))}
    </div>
  );
};

export default PlayersList;