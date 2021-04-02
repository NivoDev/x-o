import React from 'react';
import './board.css';


function Board({ board, onClick}){
    return(
        <div className="Board">
            {board.map((line, row) =>(
                <div className="Line">
                    {line.map((sign,col) =>(<div className="Box" onClick={()=> !sign && onClick({row,col})}>{sign}</div>))}
                </div>
            ))}
        </div>
    )
}

export default Board;