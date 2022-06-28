import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDifRR-lTsvAg90_Pq1XaQbGnOKwHkmt-E",
    authDomain: "chat-app-final-44ddd.firebaseapp.com",
    projectId: "chat-app-final-44ddd",
    storageBucket: "chat-app-final-44ddd.appspot.com",
    messagingSenderId: "229046426576",
    appId: "1:229046426576:web:fb51ac235a30582fc3f7d5",
    databaseURL: "https://chat-app-final-44ddd.firebaseio.com",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
export { auth, storage, db };
