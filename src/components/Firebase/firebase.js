import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAsz75AJ_7sqczc7J-UENR7p4hvMTQjJc0",
    authDomain: "drone-prueba-969bc.firebaseapp.com",
    projectId: "drone-prueba-969bc",
    storageBucket: "drone-prueba-969bc.appspot.com",
    messagingSenderId: "854542058300",
    appId: "1:854542058300:web:4498421f7c0450dc0ed439"
};

const app = firebase.initializeApp(firebaseConfig);
export function getFirebase() {
  return app;
}
export const database = firebase.firestore();