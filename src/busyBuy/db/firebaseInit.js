// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCL9svI-NrJNjUs3spjieYmk_vaOCiNBzw",
  authDomain: "rect-blog.firebaseapp.com",
  projectId: "rect-blog",
  storageBucket: "rect-blog.appspot.com",
  messagingSenderId: "1056004397959",
  appId: "1:1056004397959:web:2d9b8801548aa084121122"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
