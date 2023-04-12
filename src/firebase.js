import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCk6sCmWCu-fZe7KymrHosT-7P_ODrzp8I",
  authDomain: "netflix-clone-106b0.firebaseapp.com",
  projectId: "netflix-clone-106b0",
  storageBucket: "netflix-clone-106b0.appspot.com",
  messagingSenderId: "474735966061",
  appId: "1:474735966061:web:d3cddea7b75c2640de8c64",
  measurementId: "G-KX2P0RDN1S",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
