// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC3knrYEhmeC8pWNgmAaqj7B06h_eQrVqE",
  authDomain: "selayar-blog.firebaseapp.com",
  projectId: "selayar-blog",
  storageBucket: "selayar-blog.appspot.com",
  messagingSenderId: "699692020499",
  appId: "1:699692020499:web:3e07688fe82f1679ae60e6",
  measurementId: "G-DPW7QD49CY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
