import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { getAuth, signOut } from 'firebase/auth';
import app from '../../firebase.init';

const auth = getAuth(app);

const Header = () => {
    const [user] = useAuthState(auth);
    return (
        <div className='header'>
            <nav className='navbar'>
                <Link to={'/'}>Home</Link>
                <Link to={'/products'}>Products</Link>
                <Link to={'/orders'}>Orders</Link>
                <Link to={'/register'}>Register</Link>
                {
                    user?.uid
                        ?
                        <button onClick={() => signOut(auth)} className='sing-out-btn'>Sign out</button>
                        :
                        <Link to={'/log-in'}>Log in</Link>
                }
                <span>{user?.displayName && user.displayName}</span>
            </nav>
        </div>
    );
};

export default Header;