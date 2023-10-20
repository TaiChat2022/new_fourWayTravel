import {
    GoogleAuthProvider,
    signInWithPopup,
} from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import "../assets/css/custom_color.css";
import "../assets/css/login.css";
import { auth, firestore } from "../utils/firebase.config";
import { routes } from '../utils/routes';

const Login = () => {
    const navigate = useNavigate();
    const signInWithGoogle = async () => {
        const provider = new GoogleAuthProvider();
        try {
            const result = await signInWithPopup(auth, provider);

            // Lưu thông tin người dùng
            const userDocRef = doc(firestore, "users", result.user.uid);
            const userSnapshot = await getDoc(userDocRef);

            // Kiểm tra xem người dùng đã tồn tại trong Firestore chưa
            if (!userSnapshot.exists()) {
                // Tạo tài liệu người dùng mới 
                const userData = {
                    uid: result.user.uid,
                    displayName: result.user.displayName,
                    photoURL: result.user.photoURL,
                    isOnline: true,
                    isAdmin: false,
                    lastMessageTime: null,
                };
                await setDoc(userDocRef, userData);
            }
            if (userSnapshot.exists()) {
                await firestore.collection('users').doc(result.user.uid).update({ isOnline: true });
            }

            if (navigator.geolocation) {
                navigate(routes.HOME);
            }
        } catch (error) {
            console.error("Error logging in: ", error);
        }
    };
    return (
        <>
            <li className="h-full list-none flex relative">
                <div className="flex justify-center">
                    <button onClick={signInWithGoogle} className="flex w-full items-center h-full  cursor-pointer hover:bg-grey-200 px-4">
                        <i className="fa-regular fa-circle-user leading-none inline-flex transform "></i>
                        <span className="flex-grow text-md text-black space-nowrap mx-2">
                            Đăng nhập
                        </span>
                    </button>
                </div>
            </li>
        </>
    );
}
export default Login;