import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import * as firebase from 'firebase/app'

const firebaseConfig = require('./config/firebase-config')

firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById('root'));
