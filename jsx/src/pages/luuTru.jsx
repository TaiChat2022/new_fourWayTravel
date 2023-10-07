import React, { useState, useEffect } from 'react';
import LuuTruUI from './layout/luuTruUI';
import { db } from '../server/firebase';
import { Link } from "react-router-dom";
import { collection, onSnapshot, query } from "firebase/firestore";
const LuuTru = () => {
    const [luuTru_list, setLuuTru_list] = useState([]);
    useEffect(() => {
        const u = query(collection(db, "luuTru"));
        const unsubscribe = onSnapshot(u, (snapshot) => {
            const list = [];
            snapshot.forEach((doc) => {
                list.push({ id: doc.id, ...doc.data() });
            });
            setLuuTru_list(list);
        });
        return () => unsubscribe();
    }, []);
    const getRatingText = (star) => {
        if (star > 4) return "Xuất sắc";
        if (star > 3) return "Tuyệt vời";
        if (star === 3) return "Bình thường";
        return "Giá rẻ";
    }
    return (
        <>
            <LuuTruUI
                luuTru_list ={luuTru_list}
                getRatingText ={getRatingText}
                Link = {Link}
            />
            <list/>
        </>
    );
};

export default LuuTru;