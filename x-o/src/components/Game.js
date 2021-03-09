import React from 'react';
import Board from './Board';

function Game({game, onPlay}){
    return(
        <div className="App">
            <Board board={game.board} onClick={}/>
            {game.isMyTurn && " It's your turn"}
        </div>
    )

}

export default Game;