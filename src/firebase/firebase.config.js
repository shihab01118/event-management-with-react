// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChns9YzP7Ds1_cQY371CWqkhVixaJ2v44",
  authDomain: "eventa-auth.firebaseapp.com",
  projectId: "eventa-auth",
  storageBucket: "eventa-auth.appspot.com",
  messagingSenderId: "487792954476",
  appId: "1:487792954476:web:ec47ca0689598742e65c49"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);