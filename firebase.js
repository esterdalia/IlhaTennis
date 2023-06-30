// arquivo firebase.js
import firebase from '@react-native-firebase/app';
import '@react-native-firebase/auth';
import '@react-native-firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCyTmw_uPvLgbhKF6Qv3cBrXgk51oJiiCM",
    authDomain: "projeto-app-345918.firebaseapp.com",
    projectId: "projeto-app-345918",
    storageBucket: "projeto-app-345918.appspot.com",
    messagingSenderId: "1047769620440",
    appId: "1:1047769620440:web:8e6db70e4b31405c4f1cad"
};


if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
