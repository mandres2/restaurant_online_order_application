import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyATtiAkA9czrfWqHnZ0l3VQZvAF12HYIjY",
    authDomain: "restaurant-online-order-app.firebaseapp.com",
    databaseURL: "https://restaurant-online-order-app.firebaseio.com",
    projectId: "restaurant-online-order-app",
    storageBucket: "restaurant-online-order-app.appspot.com",
    messagingSenderId: "441752720187",
    appId: "1:441752720187:web:1acead2c702f548b435d1e",
    measurementId: "G-0V4WQ9FK5S"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  firebase.firestore().settings({ timestampsInSnapshots: true });

  export default firebase;