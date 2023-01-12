// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCrmejsc2N7rSNrGpMXkMgvzaAXmgIBA4Y",
  authDomain: "netflix-clone-a3c87.firebaseapp.com",
  projectId: "netflix-clone-a3c87",
  storageBucket: "netflix-clone-a3c87.appspot.com",
  messagingSenderId: "758606648366",
  appId: "id",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
