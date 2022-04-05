import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAqYjnJrzzBabj1B4pgMLmDbmY2uobe1FY",
  authDomain: "disneyplus-clone-bec0f.firebaseapp.com",
  projectId: "disneyplus-clone-bec0f",
  storageBucket: "disneyplus-clone-bec0f.appspot.com",
  messagingSenderId: "882787435540",
  appId: "1:882787435540:web:4bd4fb160922ddad7c9301",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
