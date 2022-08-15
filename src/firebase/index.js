import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import firebaseConfig from './config';

firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();
export const timeStamp = firebase.firestore.FieldValue.serverTimestamp();
export const auth = firebase.auth();
