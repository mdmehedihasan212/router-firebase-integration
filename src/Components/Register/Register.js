import React from 'react';
import './Register.css';

const Register = () => {
    return (
        <div>
            <h1>Please Register!!</h1>
            <form className='register-input-fields'>
                <input type="text" placeholder='Your name' />
                <br />
                <input type="email" placeholder='Enter your email' />
                <br />
                <input type="password" placeholder='Enter your password' />
                <br />
                <input className='register-btn' type="submit" value="Register" />
            </form>
        </div>
    );
};

export default Register;