import { useDocsQuery } from '@/hooks/useFirestore';
import BookingLayout from "@/layout/Booking";
import { Box } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import React from 'react';
import SearchBar from "./SearchBar";

import Header from "./Header";
const Booking = () => {
    const { data: luuTru } = useDocsQuery('luuTru');
    const getRatingText = (star) => {
        if (star > 4) return 'Xuất sắc';
        if (star > 3) return 'Tuyệt vời';
        if (star === 3) return 'Bình thường';
        return 'Giá rẻ';
    };
    return (
        <>
            <Header />
            <SearchBar />
            <BookingLayout
                React={React}
                Box={Box}
                FormControl={FormControl}
                MenuItem={MenuItem}
                Select={Select}
                luuTru={luuTru}
                getRatingText={getRatingText}
            />
        </>
    );
};

export default Booking;