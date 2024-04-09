// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDACswQZkd9G8gMbEaD1dLcQyPptI3Ixjw",
  authDomain: "brazilian-cafe.firebaseapp.com",
  projectId: "brazilian-cafe",
  storageBucket: "brazilian-cafe.appspot.com",
  messagingSenderId: "774965999259",
  appId: "1:774965999259:web:e39f5df50dbf2dcc6fb83e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);