// Import the functions you need from the SDKs you need
import {getAuth} from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const FirebaseConfig = {
  apiKey: "AIzaSyAUam24VUJw8NrZUI2BV-nOkpXB9mtzlJA",
  authDomain: "project-ve.firebaseapp.com",
  projectId: "project-ve",
  storageBucket: "project-ve.appspot.com",
  messagingSenderId: "208465408681",
  appId: "1:208465408681:web:d2c80e29c7427278196fb8",
  measurementId: "G-6YKFMB9YYG"
};

// Initialize Firebase
export const app = initializeApp(FirebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);    