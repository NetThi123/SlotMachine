import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import GameStart from './GameStart'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Slots Machine Game</h1>
      <div className="slotNumbers">
        <div className="Row1">
          <div className="box">Num 1</div>
          <div className="box">Num 2</div>
          <div className="box">Num 3</div>
        </div>
        <div className="Row2">
          <div className="box">Num 4</div>
          <div className="box">Num 5</div>
          <div className="box">Num 6</div>
        </div>
        <div className="Row3">
          <div className="box">Num 7</div>
          <div className="box">Num 8</div>
          <div className="box">Num 9</div>
        </div>
    </div>
    <GameStart />
    </>
  )
}

export default App
