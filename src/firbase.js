import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAOqI2TenIN7f-4vnRpaVcehKw0bPyRaSg",
  authDomain: "linkedin-clone-yt-9f130.firebaseapp.com",
  projectId: "linkedin-clone-yt-9f130",
  storageBucket: "linkedin-clone-yt-9f130.appspot.com",
  messagingSenderId: "525868052510",
  appId: "1:525868052510:web:7be426fe5ced480e207e0f",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
