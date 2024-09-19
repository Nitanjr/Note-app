// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjbtH18C8mRMdM0Ec0YQzUqUHaWHSM4cU",
  authDomain: "react-notes-f8fd8.firebaseapp.com",
  projectId: "react-notes-f8fd8",
  storageBucket: "react-notes-f8fd8.appspot.com",
  messagingSenderId: "657256742639",
  appId: "1:657256742639:web:aaafcef0c77f41874f251a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const notesCollection = collection(db, "notes");
