import firebase from "firebase";
import "firebase/storage";

var firebaseConfig = {
    apiKey: "AIzaSyAqTCnSZNlAOIndLNONQoBkZnTG14aAsy4",
    authDomain: "bake-example.firebaseapp.com",
    projectId: "bake-example",
    storageBucket: "bake-example.appspot.com",
    messagingSenderId: "686506469077",
    appId: "1:686506469077:web:091018d8ce44a09f12245c",
    measurementId: "G-BE1E5GPYMX"
  };

firebase.initializeApp(firebaseConfig);
const projectStorage = firebase.storage();

export { projectStorage };