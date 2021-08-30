import firebase from 'firebase' ;
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDYiieBskCVIk3R7LIKnPplWuRrJx1dk_8",
    authDomain: "instagram-clone-abhi.firebaseapp.com",
    projectId: "instagram-clone-abhi",
    storageBucket: "instagram-clone-abhi.appspot.com",
    messagingSenderId: "70014240947",
    appId: "1:70014240947:web:ce6bdc3abdcad816d688c6",
    measurementId: "G-957KMQ3P06"
  
  });

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();

  export { db, auth , storage };


