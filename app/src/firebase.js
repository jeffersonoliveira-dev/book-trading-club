import * as firebase from 'firebase';
import config from './secret/config';
import('firebase/firestore');

firebase.initializeApp(config);
const database = firebase.firestore();

export default database;
