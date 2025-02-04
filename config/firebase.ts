// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { initializeAuth, getReactNativePersistence } from "firebase/auth";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD5CZxW67_42W-K0stn2u_66GcgThvTgh0",
  authDomain: "expense-traker-3e509.firebaseapp.com",
  projectId: "expense-traker-3e509",
  storageBucket: "expense-traker-3e509.firebasestorage.app",
  messagingSenderId: "329450494034",
  appId: "1:329450494034:web:d96c51baac20976005e78b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage)
}) ;



export const firestore = getFirestore(app);