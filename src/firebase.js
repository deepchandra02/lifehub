// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const analytics = getAnalytics(app);