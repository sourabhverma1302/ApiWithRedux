// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import 'firebase/compat/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJLFqb5kVLCurygcNcF2FdnI3dY9rdUsg",
  authDomain: "api-with-redux.firebaseapp.com",
  projectId: "api-with-redux",
  storageBucket: "api-with-redux.appspot.com",
  messagingSenderId: "704228213177",
  appId: "1:704228213177:web:454294754f674e27da7668"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);