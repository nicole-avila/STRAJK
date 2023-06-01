import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAWkWA5P2US4P3qFSw8XEORfxDf2bR6eXw",
  authDomain: "strajk-bowling-f4d7e.firebaseapp.com",
  projectId: "strajk-bowling-f4d7e",
  storageBucket: "strajk-bowling-f4d7e.appspot.com",
  messagingSenderId: "138960305178",
  appId: "1:138960305178:web:be6ee8498b02d9e449e5a3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)


export { db }