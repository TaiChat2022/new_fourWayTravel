import { useDocsQuery } from '@/hooks/useFirestore';
import LichSuDPLayout from '@/layout/lichSuDP';
import { auth, firestore } from '@/utils/firebase.config';
import { doc, getDoc } from 'firebase/firestore';
import React from 'react';
import { Link } from 'react-router-dom';

const LichSuDP = () => {
	const { data: luuTru } = useDocsQuery('luuTru');
	const [currentUser, setCurrentUser] = React.useState(null);

	React.useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((user) => {
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

	const renderStars = (soSao) => {
		let stars = [];
		for (let i = 0; i < soSao; i++) {
			stars.push(
				<i
					key={i}
					className="fa-solid fa-star text-white-100"
				></i>,
			);
		}
		return stars;
	};
	return (
		<>
			<LichSuDPLayout
				Link={Link}
				currentUser={currentUser}
				userDatPhong={userDatPhong}
				luuTru={luuTru}
				renderStars={renderStars}
			/>
		</>
	);
};

export default LichSuDP;
