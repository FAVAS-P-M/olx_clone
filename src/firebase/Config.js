import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'
const firebaseConfig = {
    apiKey: "AIzaSyDauA8XIrsXtUeaZaGNhjB4BK0g9wT9d_o",
    authDomain: "assignment3-33977.firebaseapp.com",
    projectId: "assignment3-33977",
    storageBucket: "assignment3-33977.appspot.com",
    messagingSenderId: "546869126323",
    appId: "1:546869126323:web:844f655fc60403d8497cc6"
  };

  export default firebase.initializeApp(firebaseConfig)