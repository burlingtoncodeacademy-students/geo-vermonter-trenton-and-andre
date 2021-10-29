import "./App.css";
import { useState } from "react";
import Map from "./components/Map";
import borderData from "./data/border";
import L from "leaflet";
import leaflet from "leaflet";
import leafletPip from "leaflet";

function App() {
  //use states
  //the use state to center the map
  const [center, setCenter] = useState([43.88, -72.7317]);
  //use state to disable the buttons
  const [disable, setDisable] = useState(false);
  //use state for lat and long
  // const [long, setLong] = useState(-72.7317);
  // const [lat, setLat] = useState(43.88);

  // All buttons besides start are disabled. On click start is disabled, other buttons are enabled.
  function randomCords() {
    //max and min longitude and latitude of vermont
    let poly = L.geoJSON(borderData);
    let maxLat = 45.005419;
    let minLat = 42.730315;
    let maxLong = -71.510225;
    let minLong = -73.35218;
    // taking max in min to get random longitude and latitude inside vermont
    let latRange = maxLat - minLat + 1;
    let longRange = maxLong - minLong + 1;
    //setting the lat and long to random inside vermont
    let newLat = Math.random() * latRange + minLat;
    let newLong = Math.random() * longRange + minLong;
    console.log(newLat);
    console.log(newLong);

    let results = leafletPip.pointInLayer([newLong, newLat], poly);
    return [newLat, newLong];
  }

  return (
    //wrapping flex box
    <div id="wrapper">
      {/* the map that the game uses  */}
      <Map center={center} />
      <div>
        {/* a start button that disables after clicked */}
        <button
          disabled={disable}
          onClick={() => {
            setDisable(true);
            // setCenter([newLat, newLong]);
          }}
        >
          START
        </button>
        {/* a guess and quit button that are enabled on the click of start */}
        <button disabled={!disable}>QUIT</button>
        <button disabled={!disable}>GUESS</button>
      </div>
    </div>
  );
}

export default App;
