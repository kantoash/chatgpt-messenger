// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB7C4_kjzdGYJQgCMazrxlw-GtVH85FEOc",
  authDomain: "chatgpt-messenger-61abd.firebaseapp.com",
  projectId: "chatgpt-messenger-61abd",
  storageBucket: "chatgpt-messenger-61abd.appspot.com",
  messagingSenderId: "696128627592",
  appId: "1:696128627592:web:0762454e44c5f8696e103d",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app)

export { db }