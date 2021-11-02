import "./App.css";
import { useState } from "react";
import Map from "./components/Map";
import borderData from "./data/border";
import L from "leaflet";
import leafletPip from "leaflet-pip";
import { styles } from "./styles/style";
function App() {
  //use states
  //the use state to center the map
  const [center, setCenter] = useState([43.88, -72.7317]);
  //use state to disable the buttons
  const [disable, setDisable] = useState(false);

  const [zoom, setZoom] = useState(8);
  // All buttons besides start are disabled. On click start is disabled, other buttons are enabled.

  //max and min longitude and latitude of vermont
  function randomCords() {
    let poly = L.geoJson(borderData);
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
    console.log(results);

    return { newLat, newLong, results };
  }
  //   //turn border data into a L.geoJson
  //   //import random Lat and long data here

  //   //then set up leaflet pip to a vareble
  //   // set up and if else lodgic to check result
  //   //leaflet pip will return an array if the point is in the geo json the array will have the geo json in it. and the array will be empty if it is not in vermont

  let randoFunc = randomCords();
  while (randoFunc.results.length === 0) {
    randoFunc = randomCords();
  }

  console.log(randomCords());

  console.log(randoFunc.newLat);
  return (
    //wrapping flex box
    <div style={styles.App.wrapper}>
      {/* the map that the game uses  */}
      <Map center={center} zoom={zoom} />
      <div style={styles.App.buttonBox}>
        {/* a start button that disbales after clicked */}
        <button
          style={styles.App.button}
          //disableing the start
          disabled={disable}
          onClick={() => {
            setDisable(true);
            //seting and centering the map with the random cords
            setCenter([randoFunc.newLat, randoFunc.newLong]);
            //trying to set zoom but wont work
            setZoom(18);
          }}
        >
          START
        </button>
        {/* a guess and quit button that are enabled on the click of start */}
        <button style={styles.App.button} disabled={!disable}>
          QUIT
        </button>
        <button style={styles.App.button} disabled={!disable}>
          GUESS
        </button>
      </div>
    </div>
  );
}

export default App;
