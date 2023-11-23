import { useDocsQuery } from '@/hooks/useFirestore';
import ListKhuVucLayout from '@/layout/ListKhuVucLayout';
import { useState } from 'react';
import { Link } from 'react-router-dom';
// const [showAllTitle, setShowTitle] = useState(false);

const List = () => {
    const { data: luuTru } = useDocsQuery('luuTru');
    const mienNamLuuTru = luuTru.filter((item) => item.danhmuc === "Tp Hồ Chí Minh");
    const mienTrungLuuTru = luuTru.filter((item) => item.danhmuc === "Hà Nội");
    const mienBacLuuTru = luuTru.filter((item) => item.danhmuc === "Tp Đà Nẵng");
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