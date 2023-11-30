import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js"

const firebaseConfig = {
  apiKey: "AIzaSyA7PU-Uz06CddPRaA6R-mp94n0NyvPFPiI",
  authDomain: "mascotas-20333.firebaseapp.com",
  projectId: "mascotas-20333",
  storageBucket: "mascotas-20333.appspot.com",
  messagingSenderId: "689058076130",
  appId: "1:689058076130:web:51f80d2e635b3dc60d55bb"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)