import firebase from "firebase";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_DB_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_DB_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_DB_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_DB_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_DB_MESSAGNG_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_DB_MESSAGNG_APP_ID,
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export default db;
