import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

firebase.initializeApp({
  // Your Firebase configuration
});

export const auth = firebase.auth();
export const db = firebase.firestore();

export default firebase;
