import React,{useState , useEffect} from 'react';
import { Route, Routes } from "react-router-dom";
import Menu from './menu';
import Home from './home';
import Book from './book';

import FooterUI from './layout/footerUI';
const Main = () => {
    // MENU 
        const [currentMenu, setCurrentMenu] = useState('messenger');
        const [selectedMenu, setSelectedMenu] = useState({
            luutru: true,
            khachsan: false,
            diadiemthamquan: false,
            taxi: false,
        });
        // Rest các menu khi được chọn
        const resetMenus = () => {
            setSelectedMenu({
                luutru: false,
                khachsan: false,
                diadiemthamquan: false,
                taxi: false,
            });
        };
        const handleMenuClick = (menu) => {
            resetMenus();
            setSelectedMenu((prevState) => ({
                ...prevState,
                [menu]: true, // Hiển thị menu tương ứng
            }));
            setCurrentMenu(menu); // Cập nhật menu hiện tại
        };
    // END MENU

    // RESPONSIVE
    const [windowWidth, setWindowWidth] = useState(window.innerWidth); // Lưu trữ kích thước màn hình
        // Xác định kích thước màn hình và cập nhật state windowWidth
        useEffect(() => {
            const handleResize = () => {
                setWindowWidth(window.innerWidth);
            };
            window.addEventListener("resize", handleResize);
            return () => window.removeEventListener("resize", handleResize);
    }, []);
    // END RESPONSIVE
    return (
        <>
            <Menu
                currentMenu={currentMenu}
                selectedMenu={selectedMenu}
                resetMenus={resetMenus}
                handleMenuClick={handleMenuClick}
            />
            <div className={`${currentMenu === 'luutru' ? '' : 'hidden'}`}>
                <Routes>
                    <Route path="/" element={<Book />} />
                    <Route path=":userId" element={<Book />}/>
                </Routes>
            </div>
            <div className={`${currentMenu === 'khachsan' ? '' : 'hidden'}`}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path=":userId" element={<Home />}/>
                </Routes>
            </div>
            <div className={`${currentMenu === 'diadiemthamquan' ? '' : 'hidden'}`}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path=":userId" element={<Home />}/>
                </Routes>
            </div>
            <div className={`${currentMenu === 'taxi' ? '' : 'hidden'}`}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path=":userId" element={<Home />}/>
                </Routes>
            </div>
            
            <FooterUI/>
        </>
    );
};

export default Main;