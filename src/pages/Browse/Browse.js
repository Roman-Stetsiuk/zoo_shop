import './Browse.css';
import React, { useEffect, useState } from 'react';
import { Board } from '../../components/Board/';
import fakerData from '../../servises/FakeData/FakeData';
import { useLoginContext } from '../../Contexts/LoginContext';

export const Browse = () => {
    const [data, setData] = useState();
    useEffect(() => {
        setData(fakerData.getProducts());
    }, []);
    const { login } = useLoginContext();
    console.log(login);
    return (
        <div className='Browse'>
            <Board data={data} />
        </div>
    );
};
