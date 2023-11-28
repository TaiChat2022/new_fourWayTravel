import { useDocsQuery } from '@/hooks/useFirestore';
import LichSuDPLayout from '@/layout/lichSuDP';
import { auth, firestore } from '@/utils/firebase.config';
import { doc, getDoc } from 'firebase/firestore';
import React from 'react';
import { Link } from 'react-router-dom';

import Footer from './Footer';
import Header from './Header';
const LichSuDP = () => {
    const { data: luuTru } = useDocsQuery('luuTru');
    const [currentUser, setCurrentUser] = React.useState(null);

    React.useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user);
            if (user) {
                fetchUserDatPhong(user.uid);
            }
        });

        return () => unsubscribe();
    }, []);
    const [userDatPhong, setUserDatPhong] = React.useState([]);

    const fetchUserDatPhong = async (userId) => {
        const userRef = doc(firestore, 'users', userId);
        const userDoc = await getDoc(userRef);
        if (userDoc.exists()) {
            setUserDatPhong(userDoc.data().datphong || []);
        }
    };
    return (
        <>
            <Header />
            <LichSuDPLayout
                Link={Link}
                currentUser={currentUser}
                userDatPhong={userDatPhong}
                luuTru={luuTru}
            />
            <Footer />
        </>
    );
};

export default LichSuDP;