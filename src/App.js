import React from "react";
import NavBar from "./Components/NavBar/navBar";
import PlayerCard from "./Components/PlayerCard/playerCard";
import ControlPanel from "./Components/ControlPanel/controlPanel";
import ScoreBoard from "./Components/ScoreBoard/scoreBoard";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <PlayerCard />
      <ControlPanel />
      <ScoreBoard />
    </div>
  );
}

export default App;
