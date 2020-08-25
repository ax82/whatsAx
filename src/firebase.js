import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAhWsHYgynwVCe0AVWv1Iru4cVhrdK8ikw",
  authDomain: "whatsax-5f423.firebaseapp.com",
  databaseURL: "https://whatsax-5f423.firebaseio.com",
  projectId: "whatsax-5f423",
  storageBucket: "whatsax-5f423.appspot.com",
  messagingSenderId: "418203539680",
  appId: "1:418203539680:web:248b4f71c0bc038bf29885",
  measurementId: "G-P8XEXZ1QNM",
};

const firebaseapp = firebase.initializeApp(firebaseConfig);
const db = firebaseapp.firestore();
const auth = firebaseapp.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { auth, provider };
export default db;
