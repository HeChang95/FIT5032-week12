// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:"AIzaSyDVfnOY3XMoKJfpXWtIfn32SOJvg8wh-4M",
  authDomain: "week7-hechang.firebaseapp.com",
  projectId: "week7-hechang",
  storageBucket: "week7-hechang.firebasestorage.app",
  messagingSenderId:"5334467061",
  appId:"1:5334467061:web:26db4a71b8bcf307dae0bc"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const db = getFirestore()
export default db
