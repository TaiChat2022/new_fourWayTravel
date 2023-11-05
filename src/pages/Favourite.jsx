import FavouriteLayout from '@/layout/Favourite';
import { auth, firestore } from '@/utils/firebase.config';
import { doc, getDoc } from 'firebase/firestore';
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../pages/Header';
const Favourite = () => {

    const [currentUser, setCurrentUser] = React.useState(null);
    const [userFavorites, setUserFavorites] = React.useState([]);

    React.useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                setCurrentUser(user);

                // Lấy thông tin người dùng hiện tại và mảng "favorites"
                const userRef = doc(firestore, 'users', user.uid);
                const fetchUserFavorites = async () => {
                    const userDoc = await getDoc(userRef);
                    if (userDoc.exists()) {
                        setUserFavorites(userDoc.data().favorites || []);
                    }
                };
                fetchUserFavorites();
            } else {
                setCurrentUser(null);
            }
        });
    }, []);
    return (
        <>
            <Header />
            <FavouriteLayout
                Link={Link}
                userFavorites={userFavorites}
                currentUser={currentUser}
            />
        </>
    );
};

export default Favourite;