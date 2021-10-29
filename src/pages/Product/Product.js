import React from 'react';
import './Product.css';
import FakeData from '../../servises/FakeData/FakeData';
import {useParams} from 'react-router-dom';

export const Product = () => {
    const product = FakeData.getProduct();
    const param = useParams();
    console.log(param);
    return (
        <div className='Product'>
            <div className='product-description'>
                <img src={product.thumbnail} className='image' alt={product.name}/>
                <ul className='product-description-text'>
                    <li> {product.name} </li>
                    <li> {product.description} </li>
                    <li> {product.developer} </li>
                    <li> {product.date} </li>
                    <li> {product.price} </li>
                </ul>
                <ul className='tech'>
                    <li> System: {product.name} {product.number}</li>
                    <li> Processor: {product.name} {product.number}.{product.number}</li>
                    <li> Ram: {product.number}GB</li>
                    <li> Graphics card: {product.name} {product.number}</li>
                    <li> Disk memory: {product.number}GB</li>
                </ul>
            </div>
            <div className='product-screenshots'>
                <img src={product.thumbnail} className='product-screen' alt={product.name}/>
                <img src={product.thumbnail} className='product-screen' alt={product.name}/>
                <img src={product.thumbnail} className='product-screen' alt={product.name}/>
                <img src={product.thumbnail} className='product-screen' alt={product.name}/>
                <img src={product.thumbnail} className='product-screen' alt={product.name}/>
                <img src={product.thumbnail} className='product-screen' alt={product.name}/>
                <img src={product.thumbnail} className='product-screen' alt={product.name}/>
                <img src={product.thumbnail} className='product-screen' alt={product.name}/>

            </div>
        </div>
    );
};