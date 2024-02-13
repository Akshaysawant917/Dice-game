
import dice from "./assets/dice.png"
import './StartGame.css'

const StartGame = ({start}) => {
  return (
    <div className="maindiv">
    <div className="innerdiv">
      <div className="left">
        <img src={dice} alt="" />
      </div>
      <div className="right">
        <h1>DICE GAME</h1>
        <button onClick={start}>Play Now</button>
      </div>
    </div>
  </div>
  )
}

export default StartGame