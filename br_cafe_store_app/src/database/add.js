import { collection, addDoc } from "firebase/firestore"; 
import { db } from "./config";

export async function save (data){
    
    try {
      const docRef = await addDoc(collection(db, "reservation"), data);
      return docRef;
    } catch (error) {
      // eslint-disable-next-line
    throw new Error("Failed to add a new data.");
    }
}