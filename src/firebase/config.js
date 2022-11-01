import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCW5w4CraxjPHvZQ40S-iovykSZ9IgITHM",
  authDomain: "aboecastelli.firebaseapp.com",
  projectId: "aboecastelli",
  storageBucket: "aboecastelli.appspot.com",
  messagingSenderId: "667523828693",
  appId: "1:667523828693:web:509d129aa3942b3a364b5c",
  measurementId: "G-9HKDM0WCP1"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);