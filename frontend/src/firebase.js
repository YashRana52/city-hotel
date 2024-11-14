// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "city-hotel-c5bfb.firebaseapp.com",
  projectId: "city-hotel-c5bfb",
  storageBucket: "city-hotel-c5bfb.firebasestorage.app",
  messagingSenderId: "732065451056",
  appId: "1:732065451056:web:c5b52b7ebf2230ad9eb1f5",
  measurementId: "G-9C4CRHN7XF"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);