import React, { useState }from "react";
import '../index.css'
// import Game from "./Game"
import GetCode from "./GetCode";
import EnterCode from "./EnterCode";
import NameInput from "./NameInput";
import styled from "styled-components";
import { findAllByDisplayValue } from "@testing-library/react";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";


function Home (){
const [ game, setGame] = useState(null)

function startGame({ playerName , code }){
  //api request t ostart game
  

  setGame({
    identifier: 'hsja83kskd',
    me: {
      name: playerName,
      wins: 5
    },
    opponent:{ 
      name: 'Moshe',
      wins: 8
    },
    isMyTurn: false,
    mySign:'x',
    board:[
      ['x', 'o', 'x'],
      ['', '0', ''],
      ['o', '', 'x']
    ]

  });

  function sendPlayerMove(position){
    //send move to api
    // PUT 
  }

  function updateGameState(){
    //request to check the game state
  }

    return (
        <div className="App">
            {game ? (<Game onPlay={sendPlayerMove} />) : (<Start onStart={startGame}/>)}
        </div>
    )
}
}
export default Home;
