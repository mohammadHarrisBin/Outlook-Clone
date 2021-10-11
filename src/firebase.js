import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAbddliXCNgwWT3WcZknuMK6_tG0JssK5M",
    authDomain: "outlook-56dcf.firebaseapp.com",
    projectId: "outlook-56dcf",
    storageBucket: "outlook-56dcf.appspot.com",
    messagingSenderId: "835995363643",
    appId: "1:835995363643:web:acd0ce5daff2cf5a916f1e"
  };

const firebaseapp = firebase.initializeApp(firebaseConfig);
const db = firebaseapp.firestore();
const auth = firebase.auth();

export {db , auth}


