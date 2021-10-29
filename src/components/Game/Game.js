import React from 'react';
import './Game.css';
import {Routes} from '../../Constants';
import {useHistory} from 'react-router-dom';

export const Game = ({game}) => {

    const history = useHistory();
    const handleClick = () => history.push(`${Routes.product}/${game.id}`);

    return (
        <div className='Game' onClick={handleClick}>
            <img src={game.thumbnail} className='image' alt={game.name}/>
            {game.name} {game.price}


        </div>
    );
};

