import { collection, getDocs } from "firebase/firestore";
import { db } from "../Firebase/firebase";

export const useGetQuidData = async () => {
  const collectionRef = collection(db, "Quiz");
  const querySnapshot = await getDocs(collectionRef);

  querySnapshot.forEach((doc) => {
    console.log("Document ID:", doc.id);
    console.log("Document data:", doc.data());
  });
};
