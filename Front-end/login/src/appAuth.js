// appAuth.js (nuevo archivo)
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyC9HKu9IOojoQJ1njDkM6fH798NduMY60s",
  authDomain: "app-autismo-a1024.firebaseapp.com",
  projectId: "app-autismo-a1024",
  storageBucket: "app-autismo-a1024.appspot.com",
  messagingSenderId: "717885363832",
  appId: "1:717885363832:web:76991326ba2f60e953bf8d",
  measurementId: "G-K64NT3743B",
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();

export { signInWithPopup, auth, provider };
