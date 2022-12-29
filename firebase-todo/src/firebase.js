// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyArwjNz4KeBRnKlfXOvhcGtIqVSlOwLiZE",
  authDomain: "todo-app-fedc3.firebaseapp.com",
  projectId: "todo-app-fedc3",
  storageBucket: "todo-app-fedc3.appspot.com",
  messagingSenderId: "516763189134",
  appId: "1:516763189134:web:90bbc074febfc508026edf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)