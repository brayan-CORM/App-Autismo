//firebaseConfig.js
const { initializeApp } = require('firebase/app');
const { getAuth, GoogleAuthProvider } = require('firebase/auth');

const firebaseConfig = {
    apiKey: 'AIzaSyC9HKu9IOojoQJ1njDkM6fH798NduMY60s',
    authDomain: 'app-autismo-a1024.firebaseapp.com',
    projectId: 'app-autismo-a1024',
    storageBucket: 'app-autismo-a1024.appspot.com',
    messagingSenderId: '717885363832',
    appId: '1:717885363832:web:76991326ba2f60e953bf8d',
    measurementId: 'G-K64NT3743B',
  };

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const googleProvider = new GoogleAuthProvider();

module.exports = { auth, googleProvider };
