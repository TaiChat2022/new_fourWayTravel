import React, { useEffect, useState } from 'react';
import DetailEndowUI from './layout/detailEndowUI';
import { db } from '../server/firebase';
import { collection, query, onSnapshot } from 'firebase/firestore';

const DetailEndow = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const u = query(collection(db, "endow"));
        const unsubscribe = onSnapshot(u, (snapshot) => {
            const list = [];
            snapshot.forEach((doc) => {
                list.push({ id: doc.id, ...doc.data() });
            });
            setData(list);
        });
        return () => unsubscribe();
    }, []);
    

    return (
        <>
            
                <DetailEndowUI data={data} />
          
        </>
    );
};

export default DetailEndow;
