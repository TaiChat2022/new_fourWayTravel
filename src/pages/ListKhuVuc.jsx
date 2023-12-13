import { useDocsQuery } from '@/hooks/useFirestore';
import ListKhuVucLayout from '@/layout/ListKhuVucLayout';
import { useState } from 'react';
import { Link } from 'react-router-dom';
// const [showAllTitle, setShowTitle] = useState(false);

const List = () => {
    const { data: luuTru } = useDocsQuery('luuTru');
    const LuuTruHCM = luuTru.filter((item) => item.danhmuc === "Tp Hồ Chí Minh");
    const LuuTruHaNoi = luuTru.filter((item) => item.danhmuc === "Hà Nội");
    const LuuTruDaNang = luuTru.filter((item) => item.danhmuc === "Tp Đà Nẵng");
    // nam
    const [isExpanded, setIsExpanded] = useState(false); // button lưu ẩn bớt và hiện

    const displayedHCM = isExpanded ? LuuTruHCM : LuuTruHCM.slice(0, 3); // sự kiện lộc ra

    const handleToggleHCM = () => { // button để click 
        setIsExpanded(!isExpanded);
    };
    // Hà Nội
    const [isExpandedHaNoi, setIsExpandedHaNoi] = useState(false); // button lưu ẩn bớt và hiện

    const displayedHaNoi = isExpandedHaNoi ? LuuTruHaNoi : LuuTruHaNoi.slice(0, 3); // sự kiện lộc ra

    const handleToggleHaNoi = () => { // button để click 
        setIsExpandedHaNoi(!isExpandedHaNoi);
    };
    // Đà Nẵng
    const [isExpandedDaNang, setIsExpandedDaNang] = useState(false); // button lưu ẩn bớt và hiện

    const displayedDaNang = isExpandedDaNang ? LuuTruDaNang : LuuTruDaNang.slice(0, 3); // sự kiện lộc ra

    const isExpahandleToggleDaNang = () => { // button để click 
        setIsExpandedDaNang(!isExpandedDaNang);
    };
    return (
        <>
            <ListKhuVucLayout
                LuuTruHCM={LuuTruHCM}
                LuuTruHaNoi={LuuTruHaNoi}
                LuuTruDaNang={LuuTruDaNang}
                Link={Link}
                luuTru={luuTru}

                handleToggleHCM={handleToggleHCM}
                displayedHCM={displayedHCM}
                isExpanded={isExpanded}

                handleToggleHaNoi={handleToggleHaNoi}
                displayedHaNoi={displayedHaNoi}
                isExpandedHaNoi={isExpandedHaNoi}

                isExpahandleToggleDaNang={isExpahandleToggleDaNang}
                displayedDaNang={displayedDaNang}
                isExpandedDaNang={isExpandedDaNang}
            />
        </>
    );
};

export default List;