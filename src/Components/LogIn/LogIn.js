import React from 'react';
import './LogIn.css';

const LogIn = () => {
    return (
        <div>
            <h1>Please Login!!</h1>
            <form className='login-input-fields'>
                <input type="email" placeholder='Enter your email' />
                <br />
                <input type="password" placeholder='Enter your password' />
                <br />
                <input className='login-btn' type="submit" value="Login" />
            </form>
        </div>
    );
};

export default LogIn;