import "./App.css";
import { useState } from "react";
import StartButton from "./components/startButton";
import QuitButton from "./components/quitButton";
import GuessButton from "./components/guessButton";

import Map from "./components/Map";

function App() {
  const [center, setCenter] = useState([43.88, -72.7317]);
  const [disable, setDisable] = useState(false);

  function randoCord(lat, long) {
    let maxLat = 45.005419;
    let minLat = 42.730315;
    let maxLong = -71.510225;
    let minLong = -73.35218;
    let latRange = maxLat - minLat + 1;
    let longRange = maxLong - minLong + 1;
    lat = Math.floor(Math.random() * LatRange) + minLat;
    console.log(lat);
    return;
  }

  return (
    <div id="wrapper">
      <Map center={center} />
      <div>
        {" "}
        <button disabled={disable} onClick={() => setDisable(true)}>
          START
        </button>{" "}
        <button disabled={disable}>QUIT</button>
        <button disabled={disable}>GUESS</button>
      </div>
    </div>
  );
}

randoCord();
export default App;
