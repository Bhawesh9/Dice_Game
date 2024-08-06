import React from 'react'
import Home from './Components/Home'
import Playgame from './Components/Playgame'
import { useState } from 'react'

const App = () => {

  const [Start, setStart] = useState(false);
    const gamePlay = () => {
       setStart((prev) => !prev);
    };
  return (
    <div>
    {
      Start ? <Playgame /> : <Home toggle={gamePlay} />
    }
    </div>
  )
}

export default App
