import { useDocsQuery } from '@/hooks/useFirestore';
import BookingLayout from '@/layout/Booking';
import Footer from '@/pages/Footer';
import { auth, firestore } from '@/utils/firebase.config';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Modal from '@mui/material/Modal';
import Select from '@mui/material/Select';
import Typography from '@mui/material/Typography';
import { collection, doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Header from './Header';
import SearchBar from './SearchBar';
const labelFavorite = { inputProps: { 'aria-label': 'Checkbox demo' } };

const Booking = () => {
	const { address } = useParams();
	const { data: luuTru } = useDocsQuery('luuTru');
	const filterLuuTru = luuTru.filter((item) => item.danhmuc === address);

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
	const [favorites, setFavorites] = React.useState([]); // Thay đổi trạng thái yêu thích thành một mảng

	React.useEffect(() => {
		if (currentUser) {
			// Load user's favorites when the component mounts
			const userRef = doc(firestore, 'users', currentUser.uid);
			const loadFavorites = async () => {
				const userDoc = await getDoc(userRef);
				if (userDoc.exists()) {
					const userFavorites = userDoc.data().favorites || [];
					setFavorites(userFavorites);
				}
			};
			loadFavorites();
		}
	}, [currentUser]);

	const handleFavoriteChange = async (itemId) => {
		if (currentUser) {
			const userRef = doc(firestore, 'users', currentUser.uid);
			let updatedFavorites; // Định nghĩa biến updatedFavorites ở đây

			if (favorites.includes(itemId)) {
				// Item is already in favorites, remove it
				updatedFavorites = favorites.filter((favoriteId) => favoriteId !== itemId);
			} else {
				// Item is not in favorites, add it
				updatedFavorites = [...favorites, itemId];
			}
			if (userFavorites.some((favorite) => favorite.id === itemId.id)) {
				//remove it
				updatedFavorites = userFavorites.filter((favorite) => favorite.id !== itemId.id);
			}

			await updateDoc(userRef, { favorites: updatedFavorites }); // Cập nhật dữ liệu Firestore
			// Cập nhật trạng thái yêu thích sau khi cập nhật Firestore thành công
			setFavorites(updatedFavorites);
		}
	};

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

	const [xemGanDay, setXemGanDay] = React.useState([]);

	const handleAddToRecentlyViewed = async (itemId, danhMuc, title, img, price) => {
		// Kiểm tra xem itemId đã tồn tại trong xemGanDay chưa
		const itemIndex = xemGanDay.findIndex((item) => item.id === itemId);
		if (itemIndex !== -1) {
			// Nếu đã tồn tại, thì tăng số lần xem lên 1
			const updatedXemGanDay = [...xemGanDay];
			updatedXemGanDay[itemIndex].views += 1;
			setXemGanDay(updatedXemGanDay);
		} else {
			// Nếu itemId chưa có trong mảng, thêm itemId vào mảng với số lần xem là 1
			const newItem = { id: itemId, danhMuc, title, img, price, views: 1 };
			setXemGanDay([...xemGanDay, newItem]);
		}

		if (currentUser) {
			// Nếu có người dùng đăng nhập, bạn có thể lưu xemGanDay vào Firestore
			const userRef = doc(firestore, 'users', currentUser.uid);
			await updateDoc(userRef, { xemGanDay: xemGanDay });
			const xemGanDayRef = collection(userRef, 'xemGanDay');
			const itemDoc = await getDoc(doc(xemGanDayRef, itemId));

			try {
				if (itemDoc.exists()) {
					// If the item exists, update the 'views' field only
					const currentViews = itemDoc.data().views || 0;
					await updateDoc(doc(xemGanDayRef, itemId), { views: currentViews + 1 });
				} else {
					// If the item doesn't exist, setDoc to create a new document
					await setDoc(doc(xemGanDayRef, itemId), { id: itemId, danhMuc, title, img, price, views: 1 });
				}

				// Perform any other actions needed when a user views details
				console.log(`User is viewing details for item with ID: ${itemId}`);
			} catch (error) {
				console.error('Error handling recently viewed:', error);
			}
		}
	};

	const [open, setOpen] = useState(false);
	const [selectedAmenity, setSelectedAmenity] = useState(null);

	const handleOpen = (amenity) => {
		setSelectedAmenity(amenity);
		setOpen(true);
	};

	const handleClose = () => {
		setSelectedAmenity(null);
		setOpen(false);
	};

	return (
		<>
			<Header />
			<SearchBar />
			<BookingLayout
				luuTru={luuTru}
				filterLuuTru={filterLuuTru}
				React={React}
				FormControl={FormControl}
				renderStars={renderStars}
				MenuItem={MenuItem}
				Select={Select}
				getRatingText={getRatingText}
				Link={Link}
				handleFavoriteChange={handleFavoriteChange}
				Checkbox={Checkbox}
				labelFavorite={labelFavorite}
				userFavorites={userFavorites}
				handleAddToRecentlyViewed={handleAddToRecentlyViewed}
				//start modal
				open={open}
				handleClose={handleClose}
				handleOpen={handleOpen}
				Box={Box}
				Button={Button}
				Typography={Typography}
				Modal={Modal}
				selectedAmenity={selectedAmenity}
			/>
			<Footer />
		</>
	);
};

export default Booking;
