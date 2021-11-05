import React from 'react';
import './Cart.css';

export const Cart = ({ active, setActive }) => {
    return (
        <div className={active ? 'cart-wrapper active' : 'cart-wrapper'} onClick={() => setActive(false)}>
            <div className='cart-content' onClick={(e) => e.stopPropagation}>
                jgfjfjfj
            </div>
        </div>
    );
};
