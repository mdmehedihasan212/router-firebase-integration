import { getAuth } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';

const auth = getAuth(app)

const Home = () => {
    const [user] = useAuthState(auth)

    return (
        <div>
            <img src={user ? user.photoURL : 'Undefine'} alt="" />
            <p>Current User: {user ? user.displayName : 'No body'}</p>
        </div>
    );
};

export default Home;