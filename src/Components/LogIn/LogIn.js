import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { FcGoogle } from 'react-icons/fc';
import { auth } from '../../firebase.init';
import './LogIn.css';

const LogIn = () => {
    const [signInWithGoogle] = useSignInWithGoogle(auth);

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
            <div className="submit-btn">
                {/* <input onClick={() => signInWithGoogle()} className='google-sign-btn' type="submit" value="Google Sign in" /> */}
                <button onClick={() => signInWithGoogle()} className='google-sign-btn'> <FcGoogle
                    className='google-icon'
                ></FcGoogle> Google Sign in</button>
            </div>
        </div>
    );
};

export default LogIn;