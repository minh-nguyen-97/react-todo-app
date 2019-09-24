import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDZSxo1v0CYxwmHHs769dqjiUvfxofYFV8",
  authDomain: "react-todo-app-13121997.firebaseapp.com",
  databaseURL: "https://react-todo-app-13121997.firebaseio.com",
  projectId: "react-todo-app-13121997",
  storageBucket: "react-todo-app-13121997.appspot.com",
  messagingSenderId: "201430146812",
  appId: "1:201430146812:web:b58986d93e84a340110179"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore();

export { db }


