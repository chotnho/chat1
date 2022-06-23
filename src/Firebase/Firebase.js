import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/analytics';
import 'firebase/compat/firestore';

export const auth = firebase.initializeApp ({
    apiKey: "AIzaSyDgnXCri4eqABZp1MaNLuTnSVlxEWrHOGs",
    authDomain: "chat-app-f800c.firebaseapp.com",
    projectId: "chat-app-f800c",
    storageBucket: "chat-app-f800c.appspot.com",
    messagingSenderId: "530067851007",
    appId: "1:530067851007:web:1c5928174da3966e80eeca",
    measurementId: "G-V7G89VT1XN"
  }).auth();
  
  