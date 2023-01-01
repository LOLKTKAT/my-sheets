import { useState, useEffect } from "react";
import { db } from "../firebase/config";
import { collection } from "firebase/firestore";

const useFireStore = () => {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    db.collection(collection);
  }, [collection]);

  return docs;
};
