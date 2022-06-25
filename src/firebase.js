import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDifRR-lTsvAg90_Pq1XaQbGnOKwHkmt-E",
    authDomain: "chat-app-final-44ddd.firebaseapp.com",
    projectId: "chat-app-final-44ddd",
    storageBucket: "chat-app-final-44ddd.appspot.com",
    messagingSenderId: "229046426576",
    appId: "1:229046426576:web:fb51ac235a30582fc3f7d5",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
export { auth, db, storage };

export default app;
