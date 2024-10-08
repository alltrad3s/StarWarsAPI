// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBotqZqLwSyIlag2-MtopB93RbYCG9MKJ0",
  authDomain: "kodigo-startwars.firebaseapp.com",
  projectId: "kodigo-startwars",
  storageBucket: "kodigo-startwars.appspot.com",
  messagingSenderId: "773744900541",
  appId: "1:773744900541:web:54737eb4068c0dd60dbad4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);