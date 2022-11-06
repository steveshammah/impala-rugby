import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

// const firebaseConfig = {
//   apiKey: "AIzaSyC3y1CPs_WZ080vd0PjKzV6K1UK9FMvnYk",
//   authDomain: "impala-rugby.firebaseapp.com",
//   databaseURL: "https://impala-rugby-default-rtdb.europe-west1.firebasedatabase.app",
//   projectId: "impala-rugby",
//   storageBucket: "impala-rugby.appspot.com",
//   messagingSenderId: "724714135637",
//   appId: "1:724714135637:web:fe5e5220faaf820b2634dc",
//   measurementId: "G-MLNYZZNTW2"
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// export const analytics = getAnalytics(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
