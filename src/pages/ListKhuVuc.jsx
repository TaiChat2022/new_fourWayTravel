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
    // nam
    const [isExpanded, setIsExpanded] = useState(false); // button lưu ẩn bớt và hiện

    const displayedMienNam = isExpanded ? mienNamLuuTru : mienNamLuuTru.slice(0, 3); // sự kiện lộc ra

    const handleToggleMienNam = () => { // button để click 
        setIsExpanded(!isExpanded);
    };
    // Trung
    const [isExpandedTrung, setIsExpandedTrung] = useState(false); // button lưu ẩn bớt và hiện

    const displayedMienTrung = isExpandedTrung ? mienTrungLuuTru : mienTrungLuuTru.slice(0, 3); // sự kiện lộc ra

    const handleToggleMienTrung = () => { // button để click 
        setIsExpandedTrung(!isExpandedTrung);
    };
    // Bắc
    const [isExpandedBac, setIsExpandedBac] = useState(false); // button lưu ẩn bớt và hiện

    const displayedMienBac = isExpandedBac ? mienBacLuuTru : mienBacLuuTru.slice(0, 3); // sự kiện lộc ra

    const handleToggleMienBac = () => { // button để click 
        setIsExpandedBac(!isExpandedBac);
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
                displayedMienNam={displayedMienNam}
                isExpanded={isExpanded}
                handleToggleMienTrung={handleToggleMienTrung}
                displayedMienTrung={displayedMienTrung}
                isExpandedTrung={isExpandedTrung}
                handleToggleMienBac={handleToggleMienBac}
                displayedMienBac={displayedMienBac}
                isExpandedBac={isExpandedBac}
            />
        </>
    );
};

export default List;