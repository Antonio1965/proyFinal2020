import firebase from "firebase/app";
import "firebase/firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAZgiXtf3e2_RV-uLAp1Cf72qmrL0pJfrY",
  authDomain: "base-datos-c0090.firebaseapp.com",
  projectId: "base-datos-c0090",
  storageBucket: "base-datos-c0090.appspot.com",
  messagingSenderId: "493186273818",
  appId: "1:493186273818:web:7f6d45a01c662d58bdf7a3"
};

const app = firebase.initializeApp(firebaseConfig);

export function getFirebase(){
  return app;
}

export const database = firebase.firestore();
