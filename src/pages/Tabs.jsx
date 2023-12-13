import { useDocsQuery } from '@/hooks/useFirestore';
import BasicTabs from '@/layout/Tabs';
import { firestore } from '@/utils/firebase.config';
import { doc, getDocs, query } from 'firebase/firestore';
import React from 'react';
const Tabs = () => {
  // const [luutruCountByDanhMuc, setLuutruCountByDanhMuc] = useState({});
  // const { data: users } = useDocsQuery('users');
  const { data: tinhthanh1 } = useDocsQuery('danhmuc');
  const { data: tinhthanh2 } = useDocsQuery('danhmuc');
  const { data: tinhthanh3 } = useDocsQuery('danhmuc');

  const filteredDanhmucMienBac = tinhthanh1.filter((danhmuc) => danhmuc.khuvuc === 'Miền Bắc');
  const filteredDanhmucMienNam = tinhthanh2.filter((danhmuc) => danhmuc.khuvuc === 'Miền Nam');
  const filteredDanhmucMienTrung = tinhthanh3.filter((danhmuc) => danhmuc.khuvuc === 'Miền Trung');


  const [allUserXemGanDay, setAllUserXemGanDay] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const usersCollectionRef = doc(firestore, 'users');
        const usersSnapshot = await getDocs(usersCollectionRef);

        const allUserXemGanDayData = [];

        for (const userDoc of usersSnapshot.docs) {
          const userData = userDoc.data();
          const userId = userDoc.id;

          const xemGanDayQuery = query(
            doc(firestore, 'users', userId, 'xemGanDay')
          );
          const xemGanDaySnapshot = await getDocs(xemGanDayQuery);

          const userXemGanDay = [];

          xemGanDaySnapshot.forEach((xemGanDayDoc) => {
            const xemGanDayData = xemGanDayDoc.data();
            userXemGanDay.push(xemGanDayData);
          });

          allUserXemGanDayData.push({ displayName: userData.displayName, xemGanDay: userXemGanDay });
        }

        setAllUserXemGanDay(allUserXemGanDayData);
      } catch (error) {
        console.error('Error fetching xemGanDay data:', error);
      } finally {
        console.log('Loading... data:');
      }
    };

    fetchData();
  }, []);

  const [matchCount, setMatchCount] = React.useState(0);

  const countMatchingIDsAndDanhmuc = () => {
    let count = 0;
    allUserXemGanDay.forEach(user => {
      user.xemGanDay.forEach(xemGanDayItem => {
        if (filteredDanhmucMienBac.some(item =>
          item.id === xemGanDayItem.id && item.danhmuc === xemGanDayItem.danhmuc)) {
          count++;
        }
      });
    });
    return count;
  };

  React.useEffect(() => {
    const count = countMatchingIDsAndDanhmuc();
    setMatchCount(count);
  }, [allUserXemGanDay, filteredDanhmucMienBac]);

  return (
    <>
      <BasicTabs
        tinhthanh1={filteredDanhmucMienBac}
        tinhthanh2={filteredDanhmucMienNam}
        tinhthanh3={filteredDanhmucMienTrung}

        allUserXemGanDay={allUserXemGanDay}
        matchCount={matchCount}
      />

    </>
  );
};

export default Tabs;
