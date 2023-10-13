import Logo from '@/assets/img/Logo_hotel.png';
import MenuLayOut from "@/layout/Menu";
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import React from 'react';
import { Link } from 'react-router-dom';

import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';

const currincey = [
    'VNĐ - Việt Nam đồng',
    'USD - Us Dollar',
    'JPY - Japanese Yen',
];

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

const language = [
    'VI - tiếng Việt',
    'EN - tiếng Anh',
    'JP - tiếng Nhật',
];
const ITEM_HEIGHT = 36;

const Header = ({
    windowWidth
}) => {
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
    const [selectedCurrency, setSelectedCurrency] = React.useState('VNĐ - Việt Nam đồng');
    const handleCurrencyChange = (newCurrency) => {
        setSelectedCurrency(newCurrency);
        handleClose2();
    };
    // Select Language
    const [selectedLanguage, setSelectedLanguage] = React.useState('VI - tiếng Việt');
    const handleLanguageChange = (newLanguage) => {
        setSelectedLanguage(newLanguage);
        handleClose3(); // Đóng menu sau khi chọn
    };

    // Modal 
    const [openModal, setOpenModal] = React.useState(false);
    const handleOpenModal = () => setOpenModal(true);
    const handleCloseModal = () => setOpenModal(false);

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
        />
    );
};

export default Header;