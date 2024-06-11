// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAqNTkIhgmQszBX0BUVdPztieNBTn_e2hM",
  authDomain: "bullrize---stock-market-news.firebaseapp.com",
  projectId: "bullrize---stock-market-news",
  storageBucket: "bullrize---stock-market-news.appspot.com",
  messagingSenderId: "165343530107",
  appId: "1:165343530107:web:c73410b7455cadf486e6de",
  measurementId: "G-G0F6BCD5KT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export default app;
