// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from "firebase/auth"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJDumbuQDqQwH4Qby3MVrV0-ip1Dliaig",
  authDomain: "fire-base-react-5699f.firebaseapp.com",
  projectId: "fire-base-react-5699f",
  storageBucket: "fire-base-react-5699f.appspot.com",
  messagingSenderId: "185229569447",
  appId: "1:185229569447:web:d28d75087bd3a74cd65a82"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);