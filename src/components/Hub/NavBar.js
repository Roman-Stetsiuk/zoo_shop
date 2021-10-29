import React from 'react';
import './NavBar.css';
import {Logo} from '../Logo';
import {Routes} from '../../Constants';
import {useHistory} from 'react-router-dom';

export const NavBar = ({children}) => {

    const history = useHistory();
    const handleClick = () => history.push(`${Routes.login}`);

    return (
        <div className='navhab_wrapper'>
            <div className='navbar'>
                <Logo/>
                <button className='navbar-btn' onClick={handleClick}> Log in/ Sig in</button>
            </div>
            <div className='navbar_content'>{children}</div>
        </div>

    );
};
/*
* Rename Hub to NavBar +
* Fix css class naming to kebab-case +
* Create routes obj ({Browse: '/'},....) +
* use JS navigation for product page(navigate onClick)
* useHistory() , history.push()
* */