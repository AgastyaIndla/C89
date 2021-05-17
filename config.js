import firebase from 'firebase';
require('@firebase/firestore')

  var firebaseConfig = {
    apiKey: "AIzaSyDfuWipwcMeoiS8KK9AaLca1vRdLNIyGNM",
    authDomain: "booksantaapp-dc0db.firebaseapp.com",
    projectId: "booksantaapp-dc0db",
    storageBucket: "booksantaapp-dc0db.appspot.com",
    messagingSenderId: "177638798440",
    appId: "1:177638798440:web:feed2988fb1c3c6214f7dd",
    measurementId: "G-F6W3G88GWG"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();