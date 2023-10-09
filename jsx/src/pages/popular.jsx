import React, { useState, useEffect } from 'react';
import PopularUI from './layout/popularUI';
import { db } from '../server/firebase';
import { collection, onSnapshot, query } from "firebase/firestore";
const Popular = () => {
    const [fightDM_list, setFightDM_list] = useState([]);
    useEffect(() => {
        const u = query(collection(db, "danhmuc"));
        const unsubscribe = onSnapshot(u, (snapshot) => {
            const list = [];
            snapshot.forEach((doc) => {
                list.push({ id: doc.id, ...doc.data() });
            });
            setFightDM_list(list);
        });
        return () => unsubscribe();
    }, []);
    const [fight_list, setFight_list] = useState([]);
    useEffect(() => {
        const u = query(collection(db, "product"));
        const unsubscribe = onSnapshot(u, (snapshot) => {
            const list = [];
            snapshot.forEach((doc) => {
                list.push({ id: doc.id, ...doc.data() });
            });
            setFight_list(list);
        });
        return () => unsubscribe();
    }, []);
    const groupProductsByCategory = () => {
        const groupedProducts = {};
        fight_list.forEach((item) => {
          const category = item.danhmuc || 'Không có danh mục'; // Use 'Không có danh mục' for products without a category
          if (!groupedProducts[category]) {
            groupedProducts[category] = [];
          }
          groupedProducts[category].push(item);
        });
        return groupedProducts;
      };
      const groupedProducts = groupProductsByCategory();    
    return (
        <>
            <PopularUI 
            fightDM_list={fightDM_list}
            fight_list={fight_list}
            groupedProducts={groupedProducts}
            />
        </>
    );
};

export default Popular;