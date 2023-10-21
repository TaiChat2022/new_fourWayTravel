import { auth, firestore } from "@/utils/firebase.config";
import Button from '@mui/material/Button';
import {
    GoogleAuthProvider,
    signInWithPopup,
} from "firebase/auth";
import { collection, doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import "../assets/css/custom_color.css";
import "../assets/css/login.css";
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
                const usersCollection = collection(firestore, 'users');
                const userDoc = doc(usersCollection, result.user.uid);
                await updateDoc(userDoc, { isOnline: true });
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
            <Button onClick={signInWithGoogle}
                className="border-t mt-2 border-2 border-gray-900 flex items-center justify-center w-full">
                <span>Đăng nhập với google</span>
            </Button>
        </>
    );
}
export default Login;