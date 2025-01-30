// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAd3nSm_1KG9P8A6mIaIQ8oMriltq3FRx0",
    authDomain: "paintchat-2c7b4.firebaseapp.com",
    projectId: "paintchat-2c7b4",
    storageBucket: "paintchat-2c7b4.firebasestorage.app",
    messagingSenderId: "625980436664",
    appId: "1:625980436664:web:f7b143923d1e3e7f84444d",
    measurementId: "G-GY05DLT1XD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);