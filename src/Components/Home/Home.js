import React from 'react';
import './Home.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase.init';

const Home = () => {
    const [user] = useAuthState(auth)

    return (
        <div>
            <article className='user-info'>
                <img src={user ? user.photoURL : 'Undefine'} alt="" />
                <h3>Login User: {user ? user.displayName : 'No body'}</h3>
            </article>
        </div>
    );
};

export default Home;