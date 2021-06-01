
import firebase from "firebase";
var firebaseConfig = {
  apiKey: "AIzaSyDe7d0YlWBpMrIDG6iVbH54of-oouVSpaw",
  authDomain: "marketplace-dd0c5.firebaseapp.com",
  databaseURL: "https://marketplace-dd0c5-default-rtdb.firebaseio.com",
  projectId: "marketplace-dd0c5",
  storageBucket: "marketplace-dd0c5.appspot.com",
  messagingSenderId: "264511790249",
  appId: "1:264511790249:web:e9fc9836fd4597e41d1db8",
  measurementId: "G-EP1497C812"
};
  // Initialize Firebase
  var fireDb=firebase.initializeApp(firebaseConfig);

  export default fireDb.database().ref();