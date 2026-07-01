import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyApga29_le0je164vhDQ29d7afT0sSek5A",
  authDomain: "reactauth-6c52e.firebaseapp.com",
  projectId: "reactauth-6c52e",
  storageBucket: "reactauth-6c52e.firebasestorage.app",
  messagingSenderId: "926669413605",
  appId: "1:926669413605:web:c96f858f168cbb86eac80c"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);