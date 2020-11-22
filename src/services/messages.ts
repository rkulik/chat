import firebase, { db } from './firebase';
import { getUser } from './auth';

const MESSAGES_COLLECTION = 'messages';
const MESSAGES_QUERY = db.collection(MESSAGES_COLLECTION).orderBy('createdAt', 'desc').limit(25);

export const subscribeToMessages = (callback: (snapShot: firebase.firestore.QuerySnapshot) => void) =>
  MESSAGES_QUERY.onSnapshot(callback);

export const getMessages = () => MESSAGES_QUERY.get();

export const sendMessage = async (message: string) => {
  const user = getUser();
  if (!user) {
    return;
  }

  await db.collection(MESSAGES_COLLECTION).add({
    text: message,
    createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    uid: user.uid,
    photoURL: user.photoURL,
  });
};
