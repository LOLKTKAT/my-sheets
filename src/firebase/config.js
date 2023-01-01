// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAMQHD-GjTapTek2tUYqF0zhbR6uX4ADbU",
  authDomain: "my-sheets-71605.firebaseapp.com",
  projectId: "my-sheets-71605",
  storageBucket: "my-sheets-71605.appspot.com",
  messagingSenderId: "345653624830",
  appId: "1:345653624830:web:6ccfae01ea7286fad34aaf",
  measurementId: "G-VV9G3SRR7P",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const storage = getStorage(app);

export { storage };
