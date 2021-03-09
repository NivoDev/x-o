import React, {  } from "react";
import Square from "./Square";
import './board.css';

function Board ({ board, onClick }) {

      return (
        <div className="board">
          {board.map(line, row =>(
            <div>
              {line.map(sign, col => (<div className="Box" onPlay={()=> onClick}>{sign}</div>))}
            </div>
          ))}
          </div>
      )
    }
export default Board;
