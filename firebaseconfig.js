// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC791_5SsrDRfn5Xh1-cxzlXreKYBU1e0A",
  authDomain: "regal-airway-426618-d0.firebaseapp.com",
  projectId: "regal-airway-426618-d0",
  storageBucket: "regal-airway-426618-d0.appspot.com",
  messagingSenderId: "998791037081",
  appId: "1:998791037081:web:e80e0aecf77ce1938e7808",
  measurementId: "G-BZ1WSSVTR7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);