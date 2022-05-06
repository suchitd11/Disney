import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyDj4Qp6rz9Z75yCL_Y8zUK9N0R4sjm1j9Y",
    authDomain: "disney-clone-8ed1a.firebaseapp.com",
    projectId: "disney-clone-8ed1a",
    storageBucket: "disney-clone-8ed1a.appspot.com",
    messagingSenderId: "270354747668",
    appId: "1:270354747668:web:18b8837fb009bc49bb3201"
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export { db };