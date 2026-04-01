// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyATG9P3Jg8uy_1nSe-Ufgg1trp4og_4E2I",
  authDomain: "llyaz-me.firebaseapp.com",
  projectId: "llyaz-me",
  storageBucket: "llyaz-me.firebasestorage.app",
  messagingSenderId: "426878077669",
  appId: "1:426878077669:web:80d8488ff7295686c7620c",
  measurementId: "G-X29NE54FR9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app);
