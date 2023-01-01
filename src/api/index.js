// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAMQHD-GjTapTek2tUYqF0zhbR6uX4ADbU",
    authDomain: "my-sheets-71605.firebaseapp.com",
    projectId: "my-sheets-71605",
    storageBucket: "my-sheets-71605.appspot.com",
    messagingSenderId: "345653624830",
    appId: "1:345653624830:web:11267fcfa1293a90d34aaf",
    measurementId: "G-3KSP4WLRQ6"
  };


firebase.initializeApp(firebaseConfig);
var storage = firebase.storage();

export default storage;
