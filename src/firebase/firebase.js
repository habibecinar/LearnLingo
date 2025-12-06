// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAByeE4iKwgSTw1oTww6_bZV6hM06CNy3Q",
  authDomain: "learnlingo-47403.firebaseapp.com",
  databaseURL: "https://learnlingo-47403-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "learnlingo-47403",
  storageBucket: "learnlingo-47403.firebasestorage.app",
  messagingSenderId: "1092766238840",
  appId: "1:1092766238840:web:8bbb87635990773dc3058d",
  measurementId: "G-GRLDM39VLJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;