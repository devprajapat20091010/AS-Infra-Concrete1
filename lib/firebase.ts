import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyA2J4EJQImap75UcFrTgrxSkWXzVmGC0Ig",
  authDomain: "asinfra-concrete.firebaseapp.com",
  projectId: "asinfra-concrete",
  storageBucket: "asinfra-concrete.firebasestorage.app",
  messagingSenderId: "200056796753",
  appId: "1:200056796753:web:682edf68e1f06c776aaa70",
  measurementId: "G-9N2E10T5MT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Initialize Firebase services
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)

export default app
