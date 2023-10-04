import React from 'react';
import { Route, Routes } from "react-router-dom";
import Home from './home';
import Menu from './menu';
const Main = () => {
    return (
        <>
            <Menu/>
            <Routes>
                <Route path="/" element={<Home />} />
                {/* <Route path=":userId" element={<Home/>}/> */}
            </Routes>
        </>
    );
};

export default Main;