import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDwvhuhAt1kSb3vRAZsxtzgxyKxabjugzk",
    authDomain: "auth-90d22.firebaseapp.com",
    projectId: "auth-90d22",
    storageBucket: "auth-90d22.appspot.com",
    messagingSenderId: "103366723827",
    appId: "1:103366723827:web:984631e6b31b12aa7fcf86"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export {firebase}