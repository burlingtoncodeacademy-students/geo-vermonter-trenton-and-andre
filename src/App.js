import "./App.css";
import { useState } from "react";
import StartButton from "./components/startButton";
import QuitButton from "./components/quitButton";
import GuessButton from "./components/guessButton";

import Map from "./components/Map";

function App() {
  const [center, setCenter] = useState([43.88, -72.7317]);
  const [disable, setDisable] = useState(false);
  const [long, setLong] = useState(-72.7317)
  const [lat, setLat]= useState(43.88)

  // All buttons besides start are disabled. On click start is disabled, other buttons are enabled.
  function randomCord(lat, long) {
    let maxLat = 45.005419;
    let minLat = 42.730315;
    let maxLong = -71.510225;
    let minLong = -73.35218;
    let latRange = maxLat - minLat + 1;
    let longRange = maxLong - minLong + 1;
    setLat = Math.random() * latRange + minLat;
    setLong = Math.random() * longRange + minLong; 
    console.log(setLat);
    console.log(setLong)
    return;
  }

  return (
    <div id="wrapper">
      <Map center={center} />
      <div>
        <button disabled={disable} onClick={() => setDisable(true), randomCord()}>
          START
        </button>
        <button disabled={!disable}>QUIT</button>
        <button disabled={!disable}>GUESS</button>
      </div>
    </div>
  );
}


export default App;
