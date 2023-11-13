import React, { useState } from 'react';
import ListKhuVucLayout from '@/layout/ListKhuVucLayout';
import { useDocsQuery } from '@/hooks/useFirestore';
import { Link } from 'react-router-dom';
import { auth, firestore } from '@/utils/firebase.config';
// const [showAllTitle, setShowTitle] = useState(false);


const List = () => {
    const {data: luuTru} = useDocsQuery('luuTru');
    const mienNamLuuTru = luuTru.filter((item) => item.khuvuc === "Miền Nam");
    const mienTrungLuuTru = luuTru.filter((item) => item.khuvuc === "Miền Trung");
    const mienBacLuuTru = luuTru.filter((item) => item.khuvuc === "Miền Bắc");
    const [showAllMienNam, setShowAllMienNam] = useState(false);
    const handleToggleMienNam = () => {
        setShowAllMienNam(!showAllMienNam);
      };

    return (
        <>
            <ListKhuVucLayout
            mienNamLuuTru={mienNamLuuTru}
            mienTrungLuuTru={mienTrungLuuTru}
            mienBacLuuTru={mienBacLuuTru}
            Link={Link}
            luuTru={luuTru}
            handleToggleMienNam={handleToggleMienNam}
            // showAllTitle={showAllTitle}
            // setShowTitle={setShowTitle}
            />
        </>
    );
};

export default List;