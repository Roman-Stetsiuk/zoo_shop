import React from 'react';
import { Game } from '../Game/';
import './Board.css';


function Board({data}) {

    return (
        <div className="gameMenu">
            {data && data.map((game, i) => (
                <Game key={i} game={game}/>
            ))}
        </div>
    );
}

export { Board };