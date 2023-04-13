// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQ0ArXrK99hgIz-hzvtOUeHrEWkrEC9eA",
  authDomain: "social-media-project-91cfc.firebaseapp.com",
  projectId: "social-media-project-91cfc",
  storageBucket: "social-media-project-91cfc.appspot.com",
  messagingSenderId: "642566950767",
  appId: "1:642566950767:web:7cefc5f2a6dd4253eae29a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// These are being provided so that we may use them down the line
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()
export const db=getFirestore(app)