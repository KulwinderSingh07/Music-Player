import "./APP2.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Player from "./audio_player";
import Cardcomponent from "./cardcomponent";
import { useState } from "react";
function App() {
  return (
    <Router>
      <div className="App">
        <Player />
        <Cardcomponent />
      </div>
    </Router>
  );
}

export default App;
