import React from 'react';
import { Link, useParams } from "react-router-dom";
import { useDocQuery } from "../hooks/firestore";
import FooterUI from './layout/footerUI';
import ListKhachSanUi from './layout/list_khachSanUI';
import Menu from './menu';
const list_khachSan = ({
}) => {
    const { id } = useParams();
    const { data, } = useDocQuery('khachSan', id)
    const renderStars = () => {
        let stars = [];
        for (let i = 0; i < data.star; i++) {
            stars.push(<i key={i} className="bi bi-star-fill text-yellow-400"></i>);
        }
        return stars;
    };
    // RESPONSIVE
    const [windowWidth, setWindowWidth] = React.useState(window.innerWidth); // Lưu trữ kích thước màn hình
    // Xác định kích thước màn hình và cập nhật state windowWidth
    React.useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    // END RESPONSIVE
    return (
        <>
            <Menu />
            <ListKhachSanUi
                data={data}
                renderStars={renderStars}
                Link={Link}
                windowWidth={windowWidth}
            />

            <FooterUI />
        </>
    );
};

export default list_khachSan;
