import { useDocsQuery } from '@/hooks/useFirestore';
import XemGanDayLayout from '@/layout/xemGanDay';
import { auth, firestore } from '@/utils/firebase.config';
import { doc, getDoc } from 'firebase/firestore';
import React from 'react';
const XemGanDay = () => {
    const [currentUser, setCurrentUser] = React.useState(null);
    const { data: luuTru } = useDocsQuery('luuTru');
    const [userXemGanDay, setUserXemGanDay] = React.useState([]);
    React.useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                setCurrentUser(user);
                // Lấy thông tin người dùng hiện tại và mảng "favorites"
                const userRef = doc(firestore, 'users', user.uid);
                const fetchUserXemGanDay = async () => {
                    const userDoc = await getDoc(userRef);
                    if (userDoc.exists()) {
                        setUserXemGanDay(userDoc.data().favorites || []);
                    }
                };
                fetchUserXemGanDay();
            } else {
                setCurrentUser(null);
            }
        });
    }, []);

    return (
        <>
            <XemGanDayLayout
                currentUser={currentUser}
                luuTru={luuTru}
                userXemGanDay={userXemGanDay}
            />
        </>
    );
};

export default XemGanDay;