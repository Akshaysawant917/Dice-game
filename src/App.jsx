import StartGame from './StartGame';
import './App.css'
import React from "react";
import { useState } from 'react';
import StartPlay from './StartPlay';



function App() {
const [isGameStarted, setGameStarted]=useState(false);

const startGame=()=>{
  setGameStarted(!isGameStarted)
  console.log(isGameStarted);
}

  return (
    <>
    {(isGameStarted)
    ?
    <StartPlay/>
    :
    <StartGame start={startGame}/>
    }
  
    </>
  );
}

export default App;
