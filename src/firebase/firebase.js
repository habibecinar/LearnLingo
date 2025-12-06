import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

// Firebase config'in
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

// Firebase'i başlat
const app = initializeApp(firebaseConfig);

// Servisleri başlat
export const auth = getAuth(app);
export const db = getDatabase(app);

export default app;
