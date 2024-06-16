
import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAqh_hHc0LPBDXB8Rurd1075tI7nNhjDTE",
    authDomain: "auth-project-practice.firebaseapp.com",
    projectId: "auth-project-practice",
    storageBucket: "auth-project-practice.appspot.com",
    messagingSenderId: "687772816185",
    appId: "1:687772816185:web:f2d4571fe28461baae4ee8",
    measurementId: "G-0R9F5B7E72"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);