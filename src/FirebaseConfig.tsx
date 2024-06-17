// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAASYCKVXZiBvDUzScADQljStrY0MvivGI",
  authDomain: "gardenloftwebsite.firebaseapp.com",
  projectId: "gardenloftwebsite",
  storageBucket: "gardenloftwebsite.appspot.com",
  messagingSenderId: "58792679383",
  appId: "1:58792679383:web:8dbf0d091533f1d6021d92",
  measurementId: "G-B3GQRS4T1S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// Initialize Firestore
const FIRESTORE_DB = getFirestore(app);
const FIREBASE_STORAGE = getStorage(app);

export { FIRESTORE_DB , FIREBASE_STORAGE };