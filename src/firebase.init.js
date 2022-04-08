// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD0VV6D7U2WUgoFFzGXEkYkavhW7LjRnB8",
    authDomain: "router-firebase-integrat-836b8.firebaseapp.com",
    projectId: "router-firebase-integrat-836b8",
    storageBucket: "router-firebase-integrat-836b8.appspot.com",
    messagingSenderId: "890568265946",
    appId: "1:890568265946:web:9870b6e7f6acee96dd15e3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)

export default app;