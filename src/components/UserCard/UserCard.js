import React from 'react';
import FakeData from '../../servises/FakeData/FakeData';
import './UserCard.css';

export const UserCard = () => {
    const user = FakeData.getProduct();

    return (
        <button className='usercard-wrapper'>
            <img className='usercard-avatar' src={user.userAvatar} alt='Avatar' />
            <label className='usercard-nickname'> {user.username} </label>
        </button>
    );
};
