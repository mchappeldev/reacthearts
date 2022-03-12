import React from "react";
import NavBar from "./Components/NavBar/navBar";
import PlayerCard from "./Components/PlayerCard/playerCard";
import ControlPanel from "./Components/ControlPanel/controlPanel";
import ScoreBoard from "./Components/ScoreBoard/scoreBoard";
import "./App.css";

function App() {
  const playerArr = [...Array(4).keys()];
  return (
    <div className="App">
      <NavBar />
      <div class="main">
        {playerArr.map((player) => (
          <PlayerCard key={player} />
        ))}
      </div>
      <ControlPanel />
      <ScoreBoard />
    </div>
  );
}

export default App;
