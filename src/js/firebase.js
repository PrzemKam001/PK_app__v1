import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAnhpEBbwxxgiMKK_FYBkp7iW-P-tpd3_M",
    authDomain: "finaldapp.firebaseapp.com",
    projectId: "finaldapp",
    storageBucket: "finaldapp.appspot.com",
    messagingSenderId: "9570232466",
    appId: "1:9570232466:web:c8e9ff19ecb1794230de4b",
    measurementId: "G-B0F1EEWXJ8"
};


firebase.initializeApp(firebaseConfig);
firebase.analytics();

const db = firebase.firestore();

export { db };