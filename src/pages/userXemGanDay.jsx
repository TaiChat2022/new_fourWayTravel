import { useDocsQuery } from '@/hooks/useFirestore';
import UserXemGanDayLayout from "@/layout/userXemGanDay";
import { auth, firestore } from '@/utils/firebase.config';
import { collection, doc, getDocs } from 'firebase/firestore';
import React from 'react';
import { Link } from "react-router-dom";
import Footer from './Footer';
import Header from './Header';
const UserXemGanDay = () => {
    const [currentUser, setCurrentUser] = React.useState(null);
    const { data: luuTru } = useDocsQuery('luuTru');
    const [userXemGanDay, setUserXemGanDay] = React.useState([]);

    React.useEffect(() => {
        auth.onAuthStateChanged(async (user) => {
            if (user) {
                setCurrentUser(user);

                // Lấy thông tin người dùng hiện tại và mảng "xemGanDay"
                const userRef = doc(firestore, 'users', user.uid);
                const xemGanDayRef = collection(userRef, 'xemGanDay');

                try {
                    const querySnapshot = await getDocs(xemGanDayRef);
                    const fetchedUserXemGanDay = [];

                    querySnapshot.forEach((doc) => {
                        fetchedUserXemGanDay.push(doc.data());
                    });

                    console.log('Fetched User Xem Gan Day:', fetchedUserXemGanDay);
                    setUserXemGanDay(fetchedUserXemGanDay);
                } catch (error) {
                    console.error('Error fetching user Xem Gan Day:', error);
                }
            } else {
                setCurrentUser(null);
            }
        });
    }, []);
    return (
        <>
            <Header />
            <UserXemGanDayLayout
                currentUser={currentUser}
                luuTru={luuTru}
                userXemGanDay={userXemGanDay}
                Link={Link}
            />
            <Footer />
        </>
    );
};

export default UserXemGanDay;