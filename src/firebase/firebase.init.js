// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCT8qd-W6od8XRlg4jXUMkvYy5U3Upos-g",
  authDomain: "simple-firebase-ae4d5.firebaseapp.com",
  projectId: "simple-firebase-ae4d5",
  storageBucket: "simple-firebase-ae4d5.appspot.com",
  messagingSenderId: "805632217221",
  appId: "1:805632217221:web:12c14f706d7fae649bd9ec"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log(app);