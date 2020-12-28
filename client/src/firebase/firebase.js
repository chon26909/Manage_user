import firebase from 'firebase/app';
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyB7Ie67ZkoTukkf7weWf_EKTqdBl31PLWM",
    authDomain: "hi-chon.firebaseapp.com",
    databaseURL: "https://hi-chon.firebaseio.com",
    projectId: "hi-chon",
    storageBucket: "hi-chon.appspot.com",
    messagingSenderId: "909598832056",
    appId: "1:909598832056:web:61aca099cde2da9ed18b4d",
    measurementId: "G-9H2RNWT8ZF"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const firestore = firebaseApp.firestore();
const auth = firebaseApp.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider();
const facebookProvider = new firebase.auth.FacebookAuthProvider();
facebookProvider.addScope('user_birthday');

export {
    firebaseApp,
    firestore,
    auth,
    googleProvider,
    facebookProvider
}
