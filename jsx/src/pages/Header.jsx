import Logo from '@/assets/img/Logo_hotel.png';
import Login from '@/auth/Login';
import MenuLayOut from "@/layout/Menu";
import Menu from '@mui/material/Menu';
import React from 'react';
import { Link } from 'react-router-dom';

import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';

const currincey = [
    'VNĐ - Việt Nam Đồng',
    'USD - Us Dollar',
    'JPY - Japanese Yen',
];

const language = [
    'VI - tiếng Việt',
    'EN - tiếng Anh',
    'JP - tiếng Nhật',
];
const ITEM_HEIGHT = 36;

const Header = () => {
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
    return (
        <MenuLayOut
            Logo={Logo}
            Link={Link}
            Login={Login}

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
        />
    );
};

export default Header;