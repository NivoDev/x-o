import React from 'react';
import Board from './Board';
import Players from './Players.jsx';

function Game({game, onPlay}){

    function playerClicked(position){
        console.log(position)

    }

    return(
        <div className="App">
            <Board board={game.board} onClick={playerClicked}/>
            <Players me={game.me} opponent={game.opponent}/>
            {game.isMyTurn && " It's your turn"}
        </div>
    )

}

export default Game;