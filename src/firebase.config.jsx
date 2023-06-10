// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDcEtnBSIZm9b8_wFpQNujbVZtrjIAs4sc",
  authDomain: "pf-web-51803.firebaseapp.com",
  projectId: "pf-web-51803",
  storageBucket: "pf-web-51803.appspot.com",
  messagingSenderId: "669503907802",
  appId: "1:669503907802:web:9882f59cf7b3b46d6102e3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);