import React from "react";
import PlayersList from "./PlayersList";
import "./App.css";

function App() {
  return (
    <div className="app">
      <h1 className="title">⚽ Football Legends</h1>
      <p className="subtitle">Top players in the world</p>

      <PlayersList />
    </div>
  );
}

export default App;