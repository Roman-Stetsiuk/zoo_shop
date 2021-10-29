import './Browse.css';
import React, {useEffect, useState} from 'react';
import {Board} from '../../components/Board/';
import fakerData from '../../servises/FakeData/FakeData';

export const Browse = () => {
    const [data, setData] = useState();
    useEffect(() => {
        setData(fakerData.getProducts());
    }, []);

    return (
        <div className='Browse'>
            <Board data={data}/>
        </div>
    );
};

