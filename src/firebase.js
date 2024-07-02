import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {

  apiKey: "AIzaSyDKJIA3uch6gXvS2P9rl8cy04zU5imEDbM",

  authDomain: "sisiklienreactjs.firebaseapp.com",

  projectId: "sisiklienreactjs",

  storageBucket: "sisiklienreactjs.appspot.com",

  messagingSenderId: "24059327340",

  appId: "1:24059327340:web:e0340fc530738cde483949",

  measurementId: "G-ZZQCPGSR3C"

};


const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };