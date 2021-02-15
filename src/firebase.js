import firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAxRTiR11EpxSQAYpjgFYTCyuYRW165op0",
  authDomain: "mb-gayrimenkul.firebaseapp.com",
  projectId: "mb-gayrimenkul",
  storageBucket: "mb-gayrimenkul.appspot.com",
  messagingSenderId: "1066592770109",
  appId: "1:1066592770109:web:a30481bca6f0e944b7b254",
  measurementId: "G-7HGPKS8RZM",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
