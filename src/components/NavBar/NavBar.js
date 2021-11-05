import React, { useState } from 'react';
import { BsCart4 } from 'react-icons/bs';
import './NavBar.css';
import { Logo } from '../Logo';
import { UserCard } from '../UserCard/UserCard';
import { Cart } from '../Cart';

export const NavBar = ({ children }) => {
    const [cartActive, setCartActive] = useState(false);

    return (
        <div className='navhab_wrapper'>
            <div className='navbar'>
                <Logo />
                <UserCard />
                <button onClick={() => setCartActive(true)} className='navbar-cart-btn'>
                    <BsCart4 className='navbar-cart-icon' size='10x' />
                </button>
                <Cart active={cartActive} setActive={setCartActive} />
            </div>
            <div className='navbar_content'>{children}</div>
        </div>
    );
};
