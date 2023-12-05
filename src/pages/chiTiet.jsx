import Login from '@/auth/Login';
import { useDocQuery, useDocsQuery } from '@/hooks/useFirestore';
import ChiTietLayout from '@/layout/chiTiet';
import Footer from '@/pages/Footer';
import { auth } from '@/utils/firebase.config';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import React, { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Header from './Header';
import SearchBar from './SearchBar';

const styleModal = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 400,
	bgcolor: 'background.paper',
	border: '2px solid #000',
	boxShadow: 24,
	p: 4,
};

const chiTiet = () => {
	const { id } = useParams();
	const { data } = useDocQuery('luuTru', id);
	const [user, setUser] = React.useState(null);
	React.useEffect(() => {
		auth.onAuthStateChanged((user) => {
			if (user) {
				setUser(user);
			}
			else {
				setUser(null);
			}
		});
	}, []);
	const navigate = useNavigate();

	const { data: luuTru } = useDocsQuery('luuTru');

	const shuffleArrayWithoutDuplicates = (array, currentItems) => {
		const remainingItems = array.filter((item) => !currentItems.includes(item.id));
		const shuffledArray = [...remainingItems];
		for (let i = shuffledArray.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
		}
		return shuffledArray;
	};
	const [currentItemIds, setCurrentItemIds] = useState([]);
	//không lặp trùng id chi tiết

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

	const checkIcon = (tienIch) => {
		if (tienIch === 'Điều hòa') {
			return 'fa-snowflake';
		}
		if (tienIch === 'WiFi') {
			return 'fa-wifi';
		}
		if (tienIch === 'Với đầy đủ bữa ăn') {
			return 'fa-utensils';
		}
		if (tienIch === 'Đường cho xe lăn') {
			return 'fa-wheelchair';
		}
		if (tienIch === 'Thanh toán tại nơi lưu trú') {
			return 'fa-money-bill';
		}
		if (tienIch === 'Với 1 bữa ăn') {
			return 'fa-utensils';
		}
		if (tienIch === 'Đầy đủ dịch vụ') {
			return 'fa-bell-concierge';
		}
		if (tienIch === 'Gia đình') {
			return 'fa-people-roof';
		}
		if (tienIch === 'Biển') {
			return 'fa-water';
		}
		if (tienIch === 'Bể bơi') {
			return 'fa-water-ladder';
		}
		if (tienIch === 'Gồm bữa sáng') {
			return 'fa-utensils';
		}
		if (tienIch === 'Đậu xe') {
			return 'fa-square-parking';
		}
		if (tienIch === 'Bồn tắm nước nóng') {
			return 'fa-bath';
		}
		if (tienIch === 'Spa') {
			return 'fa-spa';
		}
		if (tienIch === 'Miễn phí Đổi/Hủy') {
			return 'fa-road-circle-check';
		}
		if (tienIch === 'Chấp nhận vật nuôi') {
			return 'fa-paw';
		}
		if (tienIch === 'Nhà hàng') {
			return 'fa-utensils';
		}
		if (tienIch === 'Phòng Gym') {
			return 'fa-dumbbell';
		}
		return null;
	};

	// Modal xem thêm
	const [openModal, setOpenModal] = React.useState(false);
	const handleOpenModal = () => setOpenModal(true);
	const handleCloseModal = () => setOpenModal(false);

	const [openModalLogin, setOpenModalLogin] = React.useState(false);
	const handleOpenModalLogin = () => setOpenModalLogin(true);
	const handleCloseModalLogin = () => setOpenModalLogin(false);

	return (
		<>
			<Header />
			<SearchBar />
			<ChiTietLayout
				data={data}
				getRatingText={getRatingText}
				renderStars={renderStars}
				Link={Link}
				luuTru={luuTru}
				checkIcon={checkIcon}
				//lặp trung id
				navigate={navigate}
				shuffleArrayWithoutDuplicates={shuffleArrayWithoutDuplicates}
				currentItemIds={currentItemIds}
				setCurrentItemIds={setCurrentItemIds}
				//lặp trung id

				//modal xem thêm
				Box={Box}
				Button={Button}
				Modal={Modal}

				styleModal={styleModal}
				openModal={openModal}
				handleOpenModal={handleOpenModal}
				handleCloseModal={handleCloseModal}

				Typography={Typography}
				openModalLogin={openModalLogin}
				handleOpenModalLogin={handleOpenModalLogin}
				handleCloseModalLogin={handleCloseModalLogin}
				Login={Login}

				user={user}
			/>
			<Footer />
		</>
	);
};

export default chiTiet;
