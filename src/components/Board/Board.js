import React from 'react';
import {Game} from '../Game/';
import './Board.css';


export const Board = ({data}) => {

    return (
        <div className="board-menu">
            {data && data.map((game, i) => (
                <Game key={i} game={game}/>
            ))}
        </div>
    );
};

