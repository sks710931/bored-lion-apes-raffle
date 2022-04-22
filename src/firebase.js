// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDzHEf98SlnVbI6u4j_NVKprOPZc-EbOJg",
  authDomain: "bored-lion-apes.firebaseapp.com",
  projectId: "bored-lion-apes",
  storageBucket: "bored-lion-apes.appspot.com",
  messagingSenderId: "1060889487937",
  appId: "1:1060889487937:web:9342028e1c65e879b874c0",
  measurementId: "G-5JL4JQZHFC"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
