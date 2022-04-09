import React from 'react';
import './Register.css';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';
import { getAuth } from 'firebase/auth';

const auth = getAuth(app)

const Register = () => {
    const [signInWithGoogle] = useSignInWithGoogle(auth);
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
            <div className="submit-btn">
                <input onClick={() => signInWithGoogle()} className='google-sign-btn' type="submit" value="Google Sign in" />
            </div>
        </div>
    );
};

export default Register;