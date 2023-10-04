import React, {useState, useEffect} from 'react';
import {auth} from '../server/firebase'
import HomeUI from './layout/homeUI';
const Home = () => {
    const [user, setUser] = useState(null);
    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                setUser(user);
            } else {
                setUser(null);
            }
        });
    }, []);
    return (
        <>
            <HomeUI
                user = { user }
            />
        </>
    );
};

export default Home;