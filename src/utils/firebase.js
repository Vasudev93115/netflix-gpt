// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJSpBLzgT-uLT4RWP8Pw6iiaelngUALmY",
  authDomain: "moviqs-2e707.firebaseapp.com",
  projectId: "moviqs-2e707",
  storageBucket: "moviqs-2e707.firebasestorage.app",
  messagingSenderId: "319454618281",
  appId: "1:319454618281:web:42ad0faf338678f06abfb8",
  measurementId: "G-VPFTXHP8R9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);