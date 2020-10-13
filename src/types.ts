export interface Message {
  id: string;
  createdAt: firebase.firestore.Timestamp;
  photoURL: string;
  text: string;
  uid: string;
}
