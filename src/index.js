import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyAYGWdk8qgVeIyabcc84ILYzwY7Tv10I9M",
    authDomain: "papel-madera.firebaseapp.com",
    projectId: "papel-madera",
    storageBucket: "papel-madera.appspot.com",
    messagingSenderId: "670815311223",
    appId: "1:670815311223:web:087f34d48ef3a1d9c7fd72"
};


initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

