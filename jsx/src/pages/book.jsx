import React, { useState, useEffect } from "react";
import { db } from "../server/firebase"; // Import the Firestore instance
import { collection, onSnapshot, query } from "firebase/firestore"; // Import Firestore functions


const BookRoomForm = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [numberOfRooms, setNumberOfRooms] = useState(1);

  // TODO: Handle booking logic with Firebase

  return (
    <form>
      <input type="date" placeholder="Ngày bắt đầu" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
      <input type="date" placeholder="Ngày kết thúc" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
      <input type="number" placeholder="Số lượng phòng" value={numberOfRooms} onChange={(e) => setNumberOfRooms(e.target.value)} />
      <button type="submit">Đặt phòng</button>
    </form>
  );
};

const Book = () => {
  const [rooms, setRooms] = useState([]);
  useEffect(() => {
    const u = query(collection(db, "luuTru"));
    const unsubscribe = onSnapshot(u, (snapshot) => {
        const list = [];
        snapshot.forEach((doc) => {
            list.push({ id: doc.id, ...doc.data() });
        });
        setRooms(list);
    });
    return () => unsubscribe();
}, []);

  return (
    <>

        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Img</th>
            </tr>
          </thead>
          <tbody>      
            {rooms.map((room) => (
              <tr key={room.id}>
              <td>{room.name}</td>
              <td>{room.price}</td>
              <td>{room.img}</td>
            </tr>
            ))}
          </tbody>
        </table>
        {/* <BookRoomForm /> */}

    </>
    
  );
};


export default Book;
