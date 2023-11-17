import { useDocsQuery } from '@/hooks/useFirestore';
import XemGanDayLayout from '@/layout/xemGanDay';
import { auth, firestore } from '@/utils/firebase.config';
import { collection, doc, getDoc, getDocs } from 'firebase/firestore';
import React from 'react';

const XemGanDay = () => {
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

  console.log('User Xem Gan Day:', userXemGanDay);

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
