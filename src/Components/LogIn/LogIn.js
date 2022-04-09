import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { FcGoogle } from 'react-icons/fc';
import { useLocation, useNavigate } from 'react-router-dom';
import { auth } from '../../firebase.init';
import './LogIn.css';

const LogIn = () => {
    const [signInWithGoogle] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const handleToSignIn = () => {
        signInWithGoogle()
            .then(() => {
                navigate(from, { replace: true });
            })
    }


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
                <button onClick={handleToSignIn} className='google-sign-btn'> <FcGoogle
                    className='google-icon'
                ></FcGoogle> Google Sign in</button>
            </div>
        </div>
    );
};

export default LogIn;