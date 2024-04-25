// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { get, getDatabase } from 'firebase/database'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCp_26jj13FSZzAhp7ZYah4LdYAdJ65XVw",
  authDomain: "lomotor-5bac0.firebaseapp.com",
  databaseURL: "https://lomotor-5bac0-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "lomotor-5bac0",
  storageBucket: "lomotor-5bac0.appspot.com",
  messagingSenderId: "1004371237467",
  appId: "1:1004371237467:web:5e22966628896e4fefbd7e",
  measurementId: "G-F3V55ZCXWT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getDatabase(app)

export default db;