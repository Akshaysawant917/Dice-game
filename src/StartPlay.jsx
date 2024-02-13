import React from "react";
import "./StartPlay.css";
import num1 from "./assets/1.png";
import num2 from "./assets/2.png";
import num3 from "./assets/3.png";
import num4 from "./assets/4.png";
import num5 from "./assets/5.png";
import num6 from "./assets/6.png";
import { useState } from "react";

const StartPlay = () => {
  const [selectedNum, setSelectedNum] = useState();
  const [Num, setRanNum] = useState(1);
  const [result, setResult] = useState(0);
  const [error, setError]=useState("");
  const [showRules, setShowRules] = useState(false);

  const createRandomNum = () => {
   if(!selectedNum){
    setError("You have not selected number");
    return
   }setError("")
    const ranNum = Math.floor(Math.random() * 6) + 1;
    setRanNum(ranNum);
    if (selectedNum == ranNum) {
      setResult((prev) => prev + Num);
    } else {
      setResult((prev) => prev - 2);
    }
  };

  const numImages = [num1, num2, num3, num4, num5, num6];
  return (
    <div className="outer">
      <div className="upper">
        <div>
          <h3>{result}</h3>
          <h4>Total score</h4>
        </div>
        <div className="up">
            <p>{error}</p>
          <div className="diceNum">
            <div
              onClick={() => setSelectedNum(1)}
              className={`diceNumBox ${selectedNum === 1 ? "selected" : ""}`}
            >
              1
            </div>
            <div
              onClick={() => setSelectedNum(2)}
              className={`diceNumBox ${selectedNum === 2 ? "selected" : ""}`}
            >
              2
            </div>
            <div
              onClick={() => setSelectedNum(3)}
              className={`diceNumBox ${selectedNum === 3 ? "selected" : ""}`}
            >
              3
            </div>
            <div
              onClick={() => setSelectedNum(4)}
              className={`diceNumBox ${selectedNum === 4 ? "selected" : ""}`}
            >
              4
            </div>
            <div
              onClick={() => setSelectedNum(5)}
              className={`diceNumBox ${selectedNum === 5 ? "selected" : ""}`}
            >
              5
            </div>
            <div
              onClick={() => setSelectedNum(6)}
              className={`diceNumBox ${selectedNum === 6 ? "selected" : ""}`}
            >
              6
            </div>
          </div>
          <h4>Select number</h4>
        </div>
      </div>

      <div className="lower">
        <img onClick={createRandomNum} src={numImages[Num - 1]} alt="" />
        <h5>Click on dice to roll</h5>
        <button onClick={()=>setResult(0)}>Reset score</button>
        <button onClick={()=>setShowRules(!showRules)}>Show Rules</button>
        {showRules &&(
        <div>
            <h3>How to play dice game</h3>
            <p>Select any number</p>
            <p>Click on dice image</p>
            <p>after click on  dice  if selected number is equal to dice number you will get same point as dice </p>
        </div>
        )}
      </div>
    </div>
  );
};

export default StartPlay;
