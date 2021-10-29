import React from 'react';
import './Login.css';

export const Login = () => {

    return (
        <div className='login-container'>
            <div className='login-wrap'>
                <form className='login-form'>
                    <span className='login-acc'>Account Log-in</span>
                    <span className='login-username'>Username</span>
                    <div className='login-in-username'>
                        <input className='login-input-username' type='text' name='username'/>
                        <span className='login-focus-input'> </span>
                    </div>
                    <span className='login-username'>Password</span>
                    <div className='login-in-username'>
                        <input className='login-input-username' type='password' name='password'/>
                        <span className='login-focus-input'> </span>
                    </div>
                    <div className='login-button-box'>
                        <button className='login-button'> Login </button>
                    </div>
                </form>
            </div>
        </div>
    );
};


/*
*           <div className='login-board'>
                <div className='login-menu'>
                    <div className='login-component'>
                        <label htmlFor='login'>Login: </label>
                        <input type='text' name='login' id='login'/>
                    </div>
                    <div className='login-component'>
                        <label htmlFor='login'>Password: </label>
                        <input type='password' name='password' id='password'/>
                    </div>
                </div>
            </div>
          * */