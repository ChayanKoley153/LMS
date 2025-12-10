import {getAuth, GoogleAuthProvider} from "firebase/auth"
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "loginlms-33c06.firebaseapp.com",
  projectId: "loginlms-33c06",
  storageBucket: "loginlms-33c06.firebasestorage.app",
  messagingSenderId: "281232322302",
  appId: "1:281232322302:web:602607f7d9361472e57faf",
  measurementId: "G-LCZX6JKJMG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()
export {auth,provider}