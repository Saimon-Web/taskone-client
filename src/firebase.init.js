// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBLRZJRWB1wm-vPsbwtD-ciSAxCucBJPXU",
  authDomain: "taskone-ed888.firebaseapp.com",
  projectId: "taskone-ed888",
  storageBucket: "taskone-ed888.appspot.com",
  messagingSenderId: "841707566303",
  appId: "1:841707566303:web:42b2346aa97a180524656a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export default auth;