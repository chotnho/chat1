import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/analytics';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBXQuH7hudOYwjKGEKG8OoNuFUf7rAhGHc",
    authDomain: "case-study-thiendichat.firebaseapp.com",
    projectId: "case-study-thiendichat",
    storageBucket: "case-study-thiendichat.appspot.com",
    messagingSenderId: "783762057262",
    appId: "1:783762057262:web:8e68aa490112d93952d7bf",
    measurementId: "G-X05EDJQ4FY"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  
  const auth = firebase.auth();
  const db = firebase.firestore();

  auth.useEmulator('http://localhost:9099');
  if(window.location.hostname === 'localhost'){
    db.useEmulator('localhost', '8080');
  }
  

export { db, auth };
export default firebase;