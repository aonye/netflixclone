import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAv3it6D5GrKTVVa298na2DH0zq1ghOxnE",
    authDomain: "netflix-c88c2.firebaseapp.com",
    projectId: "netflix-c88c2",
    storageBucket: "netflix-c88c2.appspot.com",
    messagingSenderId: "288374172514",
    appId: "1:288374172514:web:b8ecc5bc6c72a3518a5a3b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };