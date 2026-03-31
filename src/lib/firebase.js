// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBCzfDIvjUg8riSwup3Eo-4-iVCKk1juH8",
    authDomain: "svejite-cleaning.firebaseapp.com",
    projectId: "svejite-cleaning",
    storageBucket: "svejite-cleaning.firebasestorage.app",
    messagingSenderId: "700185115407",
    appId: "1:700185115407:web:dfd93095d9b05c5b809c7a",
    measurementId: "G-RPZVLVT9NG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Analytics (only in the browser — Next.js also runs on the server)
const analytics = typeof window !== "undefined" ? getAnalytics(app) : null;

// Initialize Firestore
const db = getFirestore(app);

export { app, analytics, db };
