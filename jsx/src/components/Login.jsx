import React from "react";
import "../assets/css/login.css";
import "../assets/css/custom_color.css";
import googleIcon from "../assets/img/Google_logo.png";
import { useNavigate } from "react-router-dom";
import { auth, db, firestore  } from "../server/firebase";
import { doc, setDoc, getDoc } from "firebase/firestore";
import {
    signInWithPopup,
    GoogleAuthProvider,
} from "firebase/auth";

const Login = () => {
    const navigate = useNavigate();
    const signInWithGoogle = async () => {
        const provider = new GoogleAuthProvider();
        try {
            const result = await signInWithPopup(auth, provider);
        
            // Lưu thông tin người dùng
            const userDocRef = doc(db, "users", result.user.uid);
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
            if(userSnapshot.exists()) {
                await firestore.collection('users').doc(result.user.uid).update({ isOnline: true });
            }

            if (navigator.geolocation) {
                navigate("/trangchu");
                // setTimeout(() => {
                // }, 1500);
            }
        } catch (error) {
            console.error("Error logging in: ", error);
        }
    };
    return (
        <>
            <div className="bg_login custom_bg_color__100">
                <div className="form-container custom_bg_color_white__200 custom_text_color_black__300">
                    <div className="logo-container">
                        Chào mừng bạn đến với FourWay Travel
                    </div>
                    <button onClick={signInWithGoogle} className="logo_google custom_bg_color_white__300">
                        <img
                            width={25}
                            height={25}
                            src={googleIcon}
                            alt="logo image"
                        />
                        <span> Sign in with Google</span>
                    </button>
                </div>
            </div>
        </>
    );
}
export default Login;