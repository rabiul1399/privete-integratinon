import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Home = () => {

    const {user} = useFirebase();
    return (
        <div>
            <h2>This is Home</h2>
            <p>Name: {user? user.displayName : "No body"}</p>
        </div>
    );
};

export default Home;