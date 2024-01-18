const { initializeApp } = require('firebase/app');
const { getAuth, GoogleAuthProvider } = require('firebase/auth');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: '.config.env' });;

// Configuración de Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyC9HKu9IOojoQJ1njDkM6fH798NduMY60s',
  authDomain: 'app-autismo-a1024.firebaseapp.com',
  projectId: 'app-autismo-a1024',
  storageBucket: 'app-autismo-a1024.appspot.com',
  messagingSenderId: '717885363832',
  appId: '1:717885363832:web:76991326ba2f60e953bf8d',
  measurementId: 'G-K64NT3743B',
};

// Inicializar Firebase
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const googleProvider = new GoogleAuthProvider();

const DB = 'mongodb+srv://bcordero869:ComunicacionEmocional@cluster0.igrndt0.mongodb.net/ComunicacionEmocional?retryWrites=true&w=majority';
mongoose.set('strictQuery', false);

const connect = async () => {
  try {
    await mongoose.connect(DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to the database');
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = { auth, googleProvider, connect };