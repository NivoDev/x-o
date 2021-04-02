import React from 'react';
import './Home';


function Players({ me, opponent}){
    return(
        <div>
            <span>{me.name}:{me.wins}</span>,
            <span>{me.opponent}:{opponent.wins}</span>
        </div>
    )
}

export default Players;