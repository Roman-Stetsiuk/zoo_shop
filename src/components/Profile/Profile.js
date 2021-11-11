import React from 'react';
import { useLoginContext } from '../../Contexts/LoginContext';
import { SigIn } from '../SigIn';
import { UserCard } from '../UserCard';

export const Profile = () => {
    const { login } = useLoginContext();

    if (login) {
        return <UserCard />;
    }
    return <SigIn />;
};
