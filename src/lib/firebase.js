import Firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCdYIwnPJScq7qZVf3kOUZLc_gg4qv4fuU",
    authDomain: "umridehub-db9a7.firebaseapp.com",
    projectId: "umridehub-db9a7",
    storageBucket: "umridehub-db9a7.appspot.com",
    messagingSenderId: "690495766385",
    appId: "1:690495766385:web:4ef094b76147bc1083c0d0"
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

console.log('firebase', firebase);

export {firebase, FieldValue};