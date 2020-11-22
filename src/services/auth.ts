import firebase, { auth } from './firebase';

export const signIn = () => {
  const provider = new firebase.auth.GoogleAuthProvider();

  return auth.signInWithPopup(provider);
};

export const signOut = () => auth.signOut();

export const getUser = () => auth.currentUser;
