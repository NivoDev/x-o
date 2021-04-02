import React, { useState }from "react";
import '../index.css';
import Game from "./Game.jsx";
import Start from "./Start.jsx";



function Home(){
const [ game, setGame] = useState(null)

function startGame({ playerName , code }){
  console.log(playerName, code)
  //api request to start game
  // POST /api/game/start
  

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
    isMyTurn: true,
    mySign:'x',
    board:[
      ['x', 'o', 'x'],
      ['', '0', ''],
      ['o', '', 'x']
    ]

  });
}

  function sendPlayerMove(position){
    //send move to api
    // PUT /api/game/move
  }

  function updateGameState(){
    //request to check the game state
    // GET /api/game/status
  }

    return (
        <div className="App">
            {game ? (<Game game={game} onPlay={sendPlayerMove} />) : (<Start onStart={startGame}/>)}
        </div>
    )
}

export default Home;
