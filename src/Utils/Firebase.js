// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAX2uvD6bcjqvk9Tgtw-dVn9FbS8w-0aTs",
  authDomain: "netflixgpt-504d8.firebaseapp.com",
  projectId: "netflixgpt-504d8",
  storageBucket: "netflixgpt-504d8.appspot.com",
  messagingSenderId: "790053093178",
  appId: "1:790053093178:web:5c5aad9b23d8d5be7e9a03",
  measurementId: "G-9KMNYRTL7N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();