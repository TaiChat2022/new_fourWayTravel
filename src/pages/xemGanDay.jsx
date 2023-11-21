import { useDocsQuery } from '@/hooks/useFirestore';
import XemGanDayLayout from '@/layout/xemGanDay';
import { auth, firestore } from '@/utils/firebase.config';
import { query, where, getDocs, deleteDoc, doc,collection } from 'firebase/firestore';
import React from 'react';


const XemGanDay = () => {
  const [currentUser, setCurrentUser] = React.useState(null);
  const { data: luuTru } = useDocsQuery('luuTru');
  const [userXemGanDay, setUserXemGanDay] = React.useState([]);
 



  React.useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        setCurrentUser(user);

        // Lấy thông tin người dùng hiện tại và mảng "xemGanDay"
        const userRef = doc(firestore, 'users', user.uid);
        const xemGanDayRef = collection(userRef, 'xemGanDay');

        try {
          const querySnapshot = await getDocs(xemGanDayRef);
          const fetchedUserXemGanDay = [];

          querySnapshot.forEach((doc) => {
            fetchedUserXemGanDay.push(doc.data());
          });

          console.log('Fetched User Xem Gan Day:', fetchedUserXemGanDay);
          setUserXemGanDay(fetchedUserXemGanDay);
        } catch (error) {
          console.error('Error fetching user Xem Gan Day:', error);
        }
      } else {
        setCurrentUser(null);
      }
    });
  }, []);

  const autoDeleteXemGanDay = async () => {
    if (currentUser) {
      const userRef = doc(firestore, 'users', currentUser.uid);
      const xemGanDayRef = collection(userRef, 'xemGanDay');
  
      try {
        // Lấy thời điểm hiện tại
        const currentTime = new Date();
  
        // Xác định thời điểm 1 phút trước
        const oneMinuteAgo = new Date(currentTime.getTime() - 30000); // 60000 milliseconds = 1 phút
  
        // Lấy các tài liệu có trường 'lastViewed' trước thời điểm 1 phút trước
        const querySnapshot = await getDocs(
          query(xemGanDayRef, where('lastViewed', '<', oneMinuteAgo))
        );
  
        const deletePromises = [];
  
        // Thực hiện xóa từng tài liệu
        querySnapshot.forEach((doc) => {
          deletePromises.push(deleteDoc(doc.ref));
        });
  
        // Chờ cho tất cả các hành động xóa hoàn thành
        await Promise.all(deletePromises);
  
        console.log(`Xóa xem gần đây sau 30s  thành công.`);
      } catch (error) {
        console.error('Lỗi không thể nào xóa xem gần đây sau 30s được:', error);
      }
    }
  };
  
  // Sử dụng setTimeout để thực hiện hành động xóa sau 1 phút
  // Gọi hàm autoDeleteXemGanDay mỗi 1 phút
  const autoDeleteInterval = 30000; // 60000 milliseconds = 1 phút
  
  setInterval(autoDeleteXemGanDay, autoDeleteInterval);
  
  // Ghi nhận một lần khi component mount để thực hiện lần đầu tiên ngay khi trang được tải
  React.useEffect(() => {
    autoDeleteXemGanDay();
  }, []);
  


  return (
    <>
      <XemGanDayLayout
        currentUser={currentUser}
        luuTru={luuTru}
        userXemGanDay={userXemGanDay}
      />
    </>
  );
};

export default XemGanDay;
