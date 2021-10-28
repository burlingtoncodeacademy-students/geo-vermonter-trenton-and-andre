import "./App.css";
import { useState } from "react";
import {Header} from "./components/header"

import Map from "./components/Map";

function App() {
  const [center, setCenter] = useState([43.88, -72.7317]);

  return (
    <div>
      <Map center={center} />
    </div>
    
    <Header/>
    <Info/>
  );
<Header/>
}

export default App;
