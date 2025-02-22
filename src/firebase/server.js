// Import Firebase modules
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFwPZJtTPZsg0zNTYJjypO-_RftgNunJE",
  authDomain: "moodmosaic-5dbba.firebaseapp.com",
  projectId: "moodmosaic-5dbba",
  storageBucket: "moodmosaic-5dbba.appspot.com",
  messagingSenderId: "721488994626",
  appId: "1:721488994626:web:ae296d63db1a64915fa8db",
  measurementId: "G-BG5F3KB0ZP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
