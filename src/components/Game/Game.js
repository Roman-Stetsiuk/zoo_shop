import React from 'react';
import './Game.css';

function Game({game}) {
    return (
        <div className='Game'><a href=""> <img src={game.thumbnail}/></a></div>
    );
}

export { Game };