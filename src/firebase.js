// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCVzhG4ngejH7a7lUa2LaWYRT_2BrFVqbQ",
  authDomain: "interview-projects-78603.firebaseapp.com",
  projectId: "interview-projects-78603",
  storageBucket: "interview-projects-78603.appspot.com",
  messagingSenderId: "940938822979",
  appId: "1:940938822979:web:3373afa0b52e1d74e79bf6",
  measurementId: "G-R2BY0KRV32",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const auth = getAuth(app);

export default auth;
