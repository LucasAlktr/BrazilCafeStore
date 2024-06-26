import { collection, getDocs } from "firebase/firestore";
import { db } from "./config";

export async function load() {
  try {
    const querySnapshot = await getDocs(collection(db, "reservation"));

    const data = [];
    querySnapshot.forEach((doc) => {
      data.push({
        ...doc.data(),
        id: doc.id,
      });
    });

    return data;
  } catch (error) {
    // eslint-disable-next-line
    throw new Error("Failed to load the data.");
  }
}
