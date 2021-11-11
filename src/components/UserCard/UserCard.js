import React from 'react';
import FakeData from '../../servises/FakeData/FakeData';
import { useLoginContext } from '../../Contexts/LoginContext';
import './UserCard.css';

export const UserCard = () => {
    const user = FakeData.getProduct();
    const { login } = useLoginContext();

    return (
        <button className='navbar-btn'>
            <img className='usercard-avatar' src={user.userAvatar} alt='Avatar' />
            <label className='usercard-nickname'> {login} </label>
        </button>
    );
};
