




// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBLipJ1v9PVULIcM43Wg5g_KfJxZjk5YJI",
  authDomain: "bio-data-b118f.firebaseapp.com",
  projectId: "bio-data-b118f",
  storageBucket: "bio-data-b118f.firebasestorage.app",
  messagingSenderId: "106454310747",
  appId: "1:106454310747:web:74a16c5ef87d026dac447e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
