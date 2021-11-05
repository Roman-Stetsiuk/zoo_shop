import React from 'react';
import { useHistory } from 'react-router-dom';
import { Routes } from '../../Constants';
import './Logo.css';

export const Logo = () => {
    const history = useHistory();
    const handleClick = () => history.push(`${Routes.browse}`);

    return (
        <div>
            <button className='logo-btn' onClick={handleClick}>
                {' '}
                Galaxy Shop
            </button>
        </div>
    );
};
