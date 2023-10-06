import React ,{ useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import MenuUI from './layout/menuUI';
import {auth} from '../server/firebase'
const Menu = ({
    currentMenu, selectedMenu,
    resetMenus , handleMenuClick
    
}) => {
    const [user, setUser] = useState(null);
    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                setUser(user);
            }
            else {
                setUser(null);
            }
        });
    }, []);

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const signOut = () => {
        auth.signOut().then(() => {
            alert('Đăng xuất thành công!');
        })
    }
    return (
        <>
            <MenuUI
                user = {user}
                Link = {Link}
                signOut = {signOut}
                isDropdownOpen = {isDropdownOpen}
                toggleDropdown = {toggleDropdown}

                currentMenu ={currentMenu}
                selectedMenu= {selectedMenu}
                resetMenus = {resetMenus}
                handleMenuClick ={handleMenuClick}
            />
        </>
    );
};

export default Menu;