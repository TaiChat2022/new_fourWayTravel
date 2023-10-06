import React, { useState, useEffect } from "react";
import { db } from "../server/firebase"; // Import the Firestore instance
import { collection, onSnapshot, query } from "firebase/firestore"; // Import Firestore functions
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
