// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
// import "firebase/analytics";

// Add the Firebase products that you want to use
// import "firebase/auth";
import "firebase/firestore";
// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: process.env.EDEMAGBENYO_FIREBASE_API_KEY,
  authDomain: "edem-agbenyo.firebaseapp.com",
  databaseURL: "https://edem-agbenyo.firebaseio.com",
  projectId: "edem-agbenyo",
  storageBucket: "edem-agbenyo.appspot.com",
  messagingSenderId: "488856719153",
  appId: process.env.EDEMAGBENYO_FIREBASE_APP_ID,
  measurementId: "G-0NMEB1WHDJ",
};

// Initialize Firebase
 firebase.initializeApp(firebaseConfig);
 export default firebase.firestore()
