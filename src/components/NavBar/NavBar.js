import React, { useState } from 'react';
import { BsCart4 } from 'react-icons/bs';
import './NavBar.css';
import { Logo } from '../Logo';
import { Cart } from '../Cart';
import { Profile } from '../Profile';

export const NavBar = ({ children }) => {
    const [cartActive, setCartActive] = useState(false);

    return (
        <div className='navhab_wrapper'>
            <div className='navbar'>
                <Logo className='navbar-btn' />
                <Profile className='navbar-btn' />
                <button onClick={() => setCartActive(true)} className='navbar-cart-btn'>
                    <BsCart4 color='#f4faf6' size='10x' />
                </button>
                <Cart active={cartActive} setActive={setCartActive} />
            </div>
            <div className='navbar_content'>{children}</div>
        </div>
    );
};
