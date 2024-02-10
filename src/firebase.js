// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAccbNFX8HYYdP6SU-KlfM9wZE2Jsar68k",
  authDomain: "lifehub-he11.firebaseapp.com",
  projectId: "lifehub-he11",
  storageBucket: "lifehub-he11.appspot.com",
  messagingSenderId: "810704885388",
  appId: "1:810704885388:web:9d42ef743b720076614da9",
  measurementId: "G-M6MGZPH6ZC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };