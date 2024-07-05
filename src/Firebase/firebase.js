import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getDatabase } from "firebase/database";
const firebaseConfig = {
  apiKey: "AIzaSyAXQuw6c2izlLO_6QtJWmytjMvZ7HcRfl4",
  authDomain: "personality-trait-quiz-b93d4.firebaseapp.com",
  databaseURL:
    "https://personality-trait-quiz-b93d4-default-rtdb.firebaseio.com",
  projectId: "personality-trait-quiz-b93d4",
  storageBucket: "personality-trait-quiz-b93d4.appspot.com",
  messagingSenderId: "17156089247",
  appId: "1:17156089247:web:1bba48ec996c39ac8d09aa",
  measurementId: "G-HVKPY8G0R3",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage();
const database = getDatabase();
export { app, db, auth, storage, database };
