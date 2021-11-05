import React from 'react';
import { useHistory } from 'react-router';
import { Routes } from '../../Constants';
import { useLoginContext } from '../../Contexts/LoginContext';
import './Login.css';

export const Login = () => {
    const { setLogin } = useLoginContext();
    const history = useHistory();
    const handleSubmit = (event) => {
        event.preventDefault();
        setLogin(event.target[0].value);
        history.push(Routes.browse);
    };

    return (
        <div className='login-container'>
            <div className='login-wrap'>
                <form className='login-form' onSubmit={handleSubmit}>
                    <span className='login-acc'>Account Log-in</span>
                    <span className='login-username'>Username</span>
                    <div className='login-in-username'>
                        <input className='login-input-username' type='text' name='username' />
                        <span className='login-focus-input'> </span>
                    </div>
                    <span className='login-username'>Password</span>
                    <div className='login-in-username'>
                        <input className='login-input-username' type='password' name='password' />
                        <span className='login-focus-input'> </span>
                    </div>
                    <div className='login-button-box'>
                        <button className='login-button' type='submit'>
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};
