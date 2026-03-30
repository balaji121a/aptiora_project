// APTIORA - Firebase Configuration
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDGKS8xpxCVEYDYQkjB_i4KFz7-zMMFMNI",
  authDomain: "aptiora-d7463.firebaseapp.com",
  projectId: "aptiora-d7463",
  storageBucket: "aptiora-d7463.firebasestorage.app",
  messagingSenderId: "5163984383381",
  appId: "1:5163984383381:web:685edc86455311274bb9e4",
  measurementId: "G-0CYG0L20LK"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
