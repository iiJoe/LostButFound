// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "INSERT-API-KEY",
  authDomain: "lostbutfound-8ae26.firebaseapp.com",
  projectId: "lostbutfound-8ae26",
  storageBucket: "lostbutfound-8ae26.appspot.com",
  messagingSenderId: "323557998123",
  appId: "1:323557998123:web:d16493d6bbe2d39740f46e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage}