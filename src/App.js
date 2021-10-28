import "./App.css";
import { useState } from "react";
import StartButton from "./components/startButton";
import QuitButton from "./components/quitButton";
import GuessButton from "./components/guessButton";

import Map from "./components/Map";

function App() {
  const [center, setCenter] = useState([43.88, -72.7317]);
  const [disable, setDisable] = useState(false);

  // All buttons besides start are disabled. On click start is disabled, other buttons are enabled.

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

export default App;
