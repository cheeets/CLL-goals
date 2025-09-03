
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBVMmWjym_p59Nzi5IUxxWNy5vz1osrtN0",
  authDomain: "cll-goals.firebaseapp.com",
  projectId: "cll-goals",
  storageBucket: "cll-goals.firebasestorage.app",
  messagingSenderId: "1031250055258",
  appId: "1:1031250055258:web:993ff8996632024990c863"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)