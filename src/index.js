
import { initializeApp } from "firebase/app";
import 'firebase/firestore'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvaL7YBMHtCmoURGv8xDYvX6qEpJlbThw",
  authDomain: "todotrackk.firebaseapp.com",
  projectId: "todotrackk",
  storageBucket: "todotrackk.appspot.com",
  messagingSenderId: "591530808908",
  appId: "1:591530808908:web:f0e61a822c92e4e6ce86e9"
};



firebase.initializeApp(firebaseConfig);

export default firebase;