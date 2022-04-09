import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import useFirebase from '../../Hooks/useFirebase';

const Header = () => {
    const { user, handleSignOut } = useFirebase();
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
                        <button onClick={handleSignOut}>Sign out</button>
                        :
                        <Link to={'/log-in'}>Log in</Link>
                }
            </nav>
        </div>
    );
};

export default Header;