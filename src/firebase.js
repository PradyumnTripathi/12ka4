// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Import Firestore
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBklJs4FV8dBrKS-PaX1MTwr7oqHiafhhs",
  authDomain: "board-infinity-51b0b.firebaseapp.com",
  projectId: "board-infinity-51b0b",
  storageBucket: "board-infinity-51b0b.appspot.com",
  messagingSenderId: "965828447535",
  appId: "1:965828447535:web:82a4be593e80576763e5da",
  measurementId: "G-YD41Q7HPEH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore (the database)
const db = getFirestore(app);

// Optional: Initialize Analytics (if needed, otherwise remove the variable)
const analytics = getAnalytics(app);

// Export db so it can be used in your app
export { db };
