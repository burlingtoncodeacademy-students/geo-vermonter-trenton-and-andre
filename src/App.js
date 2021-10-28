import './App.css';
import { useState } from 'react'
import {StartButton} from './components/startButton'
import {QuitButton} from './components/quitButton'
import {GuessButton} from './components/guessButton'

import Map from './components/Map'

function App() {

  const [center, setCenter] = useState([43.88, -72.7317])

  return (
    <div>
      <Map center={center} />
      <div>
         <StartButton/>
         <GuessButton/>
         <QuitButton/>
      </div>
    </div>
  );
}

export default App;
