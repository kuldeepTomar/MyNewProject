import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


var firebaseConfig = {
    apiKey: "AIzaSyAqRB_ct6TFxb6XU_U8bqDfSVdQ_ezutao",
    authDomain: "kuldeep-tomar-new-project.firebaseapp.com",
    databaseURL: "https://kuldeep-tomar-new-project.firebaseio.com",
    projectId: "kuldeep-tomar-new-project",
    storageBucket: "kuldeep-tomar-new-project.appspot.com",
    messagingSenderId: "462504099746",
    appId: "1:462504099746:web:6d26ee011e13f05bb77cfb",
    measurementId: "G-DNMMZQ5BHB"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({timestampsInSnapshots:true})
  export default firebase;