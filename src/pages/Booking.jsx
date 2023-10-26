import { useDocsQuery } from '@/hooks/useFirestore';
import BookingLayout from '@/layout/Booking';
import { auth, firestore } from '@/utils/firebase.config';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

import { doc, getDoc, updateDoc } from 'firebase/firestore';

import Header from './Header';
const Booking = () => {
	const { data: luuTru } = useDocsQuery('luuTru');
	const getRatingText = (star) => {
		if (star > 4) return 'Xuất sắc';
		if (star > 3) return 'Tuyệt vời';
		if (star === 3) return 'Bình thường';
		return 'Giá rẻ';
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


	const [currentUser, setCurrentUser] = React.useState(null);

	React.useEffect(() => {
		auth.onAuthStateChanged((user) => {
			if (user) {
				setCurrentUser(user);
			} else {
				setCurrentUser(null);
			}
		});
	}, []);
	const [isFavorite, setIsFavorite] = React.useState(false);

	const toggleFavorite = async (itemId) => {
		if (currentUser) {
			const userRef = doc(firestore, 'users', currentUser.uid); // Reference to the user's document
			const userDoc = await getDoc(userRef);
			if (userDoc.exists()) {
				const userFavorites = userDoc.data().favorites || [];

				if (userFavorites.includes(itemId)) {
					// Item is already in favorites, remove it
					const updatedFavorites = userFavorites.filter((favoriteId) => favoriteId !== itemId);
					await updateDoc(userRef, { favorites: updatedFavorites });
					setIsFavorite(false); // Set isFavorite to false
				} else {
					// Item is not in favorites, add it
					const updatedFavorites = [...userFavorites, itemId];
					await updateDoc(userRef, { favorites: updatedFavorites });
					setIsFavorite(true); // Set isFavorite to true
				}
			}
		}
	};

	return (
		<>
			<Header />
			<SearchBar />
			<BookingLayout
				React={React}
				FormControl={FormControl}
				renderStars={renderStars}
				MenuItem={MenuItem}
				Select={Select}
				luuTru={luuTru}
				getRatingText={getRatingText}

				Link={Link}
				toggleFavorite={toggleFavorite}
				isFavorite={isFavorite}

				currentUser={currentUser}
			/>
		</>
	);
};

export default Booking;
