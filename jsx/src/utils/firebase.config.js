import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

export const firebaseConfig = {
	apiKey: 'AIzaSyCA4NDwEP87kbIHv3pTT8-Zf2H0PjLmDDU',
	authDomain: 'hotel-fourwaytravel.firebaseapp.com',
	projectId: 'hotel-fourwaytravel',
	storageBucket: 'hotel-fourwaytravel.appspot.com',
	messagingSenderId: '859448634168',
	appId: '1:859448634168:web:661c754d107e4d123b2fcd',
	measurementId: 'G-PH9FFG3CNK',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const firestore = getFirestore(app);
export const storage = getStorage(app);
