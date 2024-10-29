import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyB7BbBF98TcN0hgbtfHwmpic7u5VQzanKI",
    authDomain: "hotel-management-de417.firebaseapp.com",
    projectId: "hotel-management-de417",
    storageBucket: "hotel-management-de417.appspot.com",
    messagingSenderId: "920886083188",
    appId: "1:920886083188:web:8a0a42a9abc32138305b21",
    measurementId: "G-8WG1W86ESH"
};

const app = initializeApp(firebaseConfig);


export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);
export const realtimeDB = getDatabase(app);