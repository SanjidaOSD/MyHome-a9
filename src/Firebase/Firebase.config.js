// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0i0TcklAAS0SgfCfnDgXv5h8emDoQ8oU",
  authDomain: "m53-assignment-project.firebaseapp.com",
  projectId: "m53-assignment-project",
  storageBucket: "m53-assignment-project.appspot.com",
  messagingSenderId: "604135774917",
  appId: "1:604135774917:web:689d407f474aa58eb36eac"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;