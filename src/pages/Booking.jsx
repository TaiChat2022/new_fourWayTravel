import BookingLayout from "@/layout/Booking";
import { Box, Container } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import React from 'react';
import SearchBar from "./SearchBar";

import Header from "./Header";
const Booking = () => {
    return (
        <>
            <Header />
            <SearchBar />
            <BookingLayout
                React={React}
                Box={Box}
                Container={Container}
                FormControl={FormControl}
                MenuItem={MenuItem}
                Select={Select}
            />
        </>
    );
};

export default Booking;