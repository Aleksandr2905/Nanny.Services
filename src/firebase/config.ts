import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const API_KEY = process.env.FIREBASE_API_KEY;

const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: "nanny-services-afa99.firebaseapp.com",
  projectId: "nanny-services-afa99",
  storageBucket: "nanny-services-afa99.appspot.com",
  messagingSenderId: "25935499254",
  appId: "1:25935499254:web:9875a9053af1f7fb5d41d7"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);