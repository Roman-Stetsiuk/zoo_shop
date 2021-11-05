import React from 'react';
import { Routes } from '../../Constants';
import { useHistory } from 'react-router-dom';

export const SigIn = () => {
    const history = useHistory();
    const handleClick = () => history.push(`${Routes.login}`);

    return (
        <button className='navbar-btn' onClick={handleClick}>
            Log in/ Sig in
        </button>
    );
};
