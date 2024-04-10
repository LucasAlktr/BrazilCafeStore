import { doc, deleteDoc } from "firebase/firestore";
import { db } from "./config";

export async function removeReservation(id) {
  console.log("File Updated");

  await deleteDoc(doc(db, "reservation", id));
}
