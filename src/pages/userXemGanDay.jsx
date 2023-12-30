import { useDocsQuery } from '@/hooks/useFirestore';
import UserXemGanDayLayout from '@/layout/userXemGanDay';
import { auth, firestore } from '@/utils/firebase.config';
import { collection, doc, getDocs,getDoc } from 'firebase/firestore';
import React from 'react';
import { Link } from 'react-router-dom';
const UserXemGanDay = () => {
	const [currentUser, setCurrentUser] = React.useState(null);
	const { data: khachSan } = useDocsQuery('khachsan');
	const [userXemGanDay, setUserXemGanDay] = React.useState([]);

	
	React.useEffect(() => {
		const fetchUserData = async (user) => {
		  if (user) {
			setCurrentUser(user);
	
			const userRef = doc(firestore, 'users', user.uid);
	
			try {
			  const userDoc = await getDoc(userRef);
	
			  if (userDoc.exists()) {
				const fetchedUserXemGanDay = userDoc.data().xemGanDay || [];
				setUserXemGanDay(fetchedUserXemGanDay);
			  } else {
				setUserXemGanDay([]);
			  }
			} catch (error) {
			  console.error('Error fetching user Xem Gan Day:', error);
			}
		  } else {
			setCurrentUser(null);
			setUserXemGanDay([]);
		  }
		};
	
		const unsubscribe = auth.onAuthStateChanged(fetchUserData);
	
		return () => {
		  unsubscribe();
		};
	  }, []);
	return (
		<>
			<UserXemGanDayLayout
				currentUser={currentUser}
				userXemGanDay={userXemGanDay}
				Link={Link}
			/>
		</>
	);
};

export default UserXemGanDay;
