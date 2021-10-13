import './Browse.css';
import React, {useEffect, useState} from 'react';
import { Board } from '../../components/Board/';
import fakerData from '../../servises/FakeData/FakeData';

function Browse() {
    const [data, setData] = useState();
    useEffect(() => {
        setData(fakerData.getProducts());
    }, []);

    return (
        <div className='Browse'>
            <div className='habbar'>
                <a href={''}> Galaxy Shop</a>
                <a href={''}> Products</a>
                <a href={''}> Log in/ Sig in</a>
            </div>
            <Board data={data}/>
        </div>
    );
}

export  { Browse };