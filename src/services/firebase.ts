import firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyDGWsK9FxPH-XpDXc--yJOtu_Qi_M5gEuY",
  authDomain: "letmeask-marcus.firebaseapp.com",
  databaseURL: "https://letmeask-marcus-default-rtdb.firebaseio.com",
  projectId: "letmeask-marcus",
  storageBucket: "letmeask-marcus.appspot.com",
  messagingSenderId: "41094522727",
  appId: "1:41094522727:web:704bcf5373b7b4115131c2"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const database = firebase.database();
