import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDACswQZkd9G8gMbEaD1dLcQyPptI3Ixjw",
  authDomain: "brazilian-cafe.firebaseapp.com",
  projectId: "brazilian-cafe",
  storageBucket: "brazilian-cafe.appspot.com",
  messagingSenderId: "774965999259",
  appId: "1:774965999259:web:e39f5df50dbf2dcc6fb83e"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);