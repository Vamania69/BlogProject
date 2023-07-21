// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA58kgZQ4xVId5VZCjKsXPu2p4qL2U6tO4",
  authDomain: "blogexpressproject101.firebaseapp.com",
  projectId: "blogexpressproject101",
  storageBucket: "blogexpressproject101.appspot.com",
  messagingSenderId: "430507285173",
  appId: "1:430507285173:web:57f9200896ab60d2ab7cfc",
  measurementId: "G-0LX2HHB7NG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth()

export {auth , app}