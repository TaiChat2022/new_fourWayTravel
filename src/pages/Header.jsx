import Logo from '@/assets/img/logo1.jpg';
import Login from '@/auth/Login';
import MenuLayOut from '@/layout/Menu';
import { auth, firestore } from '@/utils/firebase.config';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import { collection, doc, updateDoc } from "firebase/firestore";
import React from 'react';
import { Link } from 'react-router-dom';

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
const currincey = ['VND - Việt Nam Đồng', 'USD - Us Dollar', 'JPY - Japanese Yen'];
const language = ['VI - Tiếng Việt', 'EN - Tiếng Anh', 'JP - Tiếng Nhật'];
const ITEM_HEIGHT = 36;

const Header = ({ windowWidth }) => {

	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	const [anchorE2, setAnchorE2] = React.useState(null);
	const open2 = Boolean(anchorE2);
	const handleClick2 = (event) => {
		setAnchorE2(event.currentTarget);
	};
	const handleClose2 = () => {
		setAnchorE2(null);
	};

	const [anchorE3, setAnchorE3] = React.useState(null);
	const open3 = Boolean(anchorE3);
	const handleClick3 = (event) => {
		setAnchorE3(event.currentTarget);
	};
	const handleClose3 = () => {
		setAnchorE3(null);
	};

	// Select Currency
	const [selectedCurrency, setSelectedCurrency] = React.useState('VND - Việt Nam Đồng');
	const handleCurrencyChange = (newCurrency) => {
		setSelectedCurrency(newCurrency);
		handleClose2();
	};
	// Select Language
	const [selectedLanguage, setSelectedLanguage] = React.useState('VI - Tiếng Việt');
	const handleLanguageChange = (newLanguage) => {
		setSelectedLanguage(newLanguage);
		handleClose3(); // Đóng menu sau khi chọn
	};

	// Modal
	const [openModal, setOpenModal] = React.useState(false);
	const handleOpenModal = () => setOpenModal(true);
	const handleCloseModal = () => setOpenModal(false);

	const [anchorE4, setAnchorE4] = React.useState(null);
	const open4 = Boolean(anchorE4);
	const handleClick4 = (event) => {
		setAnchorE4(event.currentTarget);
	};
	const handleClose4 = () => {
		setAnchorE4(null);
	};
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
	const signOut = async () => {
		try {
			// Update the user's Firestore document to set isOnline to false
			if (user) {
				const usersCollection = collection(firestore, 'users');
				const userDoc = doc(usersCollection, user.uid);
				await updateDoc(userDoc, { isOnline: false });
			}
			// Sign out the user
			await auth.signOut();
			// alert('Đăng xuất thành công!');
			// Thực hiện chuyển trang sau khi đăng xuất
			window.location.href = '/';
		} catch (error) {
			console.error('Sign out error:', error);
		}
	};
	return (
		<MenuLayOut
			Logo={Logo}
			Link={Link}
			windowWidth={windowWidth}
			Button={Button}
			Menu={Menu}
			MenuItem={MenuItem}
			anchorEl={anchorEl}
			open={open}
			handleClick={handleClick}
			handleClose={handleClose}
			currincey={currincey}
			ITEM_HEIGHT={ITEM_HEIGHT}
			anchorE2={anchorE2}
			open2={open2}
			handleClick2={handleClick2}
			handleClose2={handleClose2}
			selectedCurrency={selectedCurrency}
			handleCurrencyChange={handleCurrencyChange}
			language={language}
			anchorE3={anchorE3}
			open3={open3}
			handleClick3={handleClick3}
			handleClose3={handleClose3}
			selectedLanguage={selectedLanguage}
			handleLanguageChange={handleLanguageChange}
			styleModal={styleModal}
			Box={Box}
			Typography={Typography}
			Modal={Modal}
			openModal={openModal}
			handleOpenModal={handleOpenModal}
			handleCloseModal={handleCloseModal}

			Login={Login}
			user={user}
			signOut={signOut}
			anchorE4={anchorE4}
			open4={open4}
			handleClick4={handleClick4}
			handleClose4={handleClose4}
		/>
	);
};

export default Header;