import React from 'react';
import { Link } from "react-router-dom";
import { useDocsQuery } from '../hooks/firestore';
import KhachSanUI from './layout/khachSanUI';
const KhachSan = () => {
    const { data: khachSan_list } = useDocsQuery('khachSan')

    const getRatingText = (star) => {
        if (star > 4) return "Xuất sắc";
        if (star > 3) return "Tuyệt vời";
        if (star === 3) return "Bình thường";
        return "Giá rẻ";
    }
    return (
        <>
            <KhachSanUI
                khachSan_list={khachSan_list}
                getRatingText={getRatingText}
                Link={Link}
            />
            <list />
        </>
    );
};

export default KhachSan;