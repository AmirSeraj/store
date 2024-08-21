// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDmLgoPUdzkNhjEnFTdxer5Y1qhbObfcUA",
  authDomain: "store-92cb7.firebaseapp.com",
  projectId: "store-92cb7",
  storageBucket: "store-92cb7.appspot.com",
  messagingSenderId: "554317645370",
  appId: "1:554317645370:web:699fc3171298a93b83d703",
  measurementId: "G-DMDE6BFMWR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);