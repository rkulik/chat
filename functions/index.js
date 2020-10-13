const functions = require('firebase-functions');
const Filter = require('bad-words');
const admin = require('firebase-admin');

admin.initializeApp();
const db = admin.firestore();

exports.detectInappropriateLanguage = functions.firestore.document('messages/{messageId}').onCreate(async doc => {
  const filter = new Filter();
  const { text, uid } = doc.data();

  if (filter.isProfane(text)) {
    await doc.ref.update({ text: 'Banned for life for using inappropriate language' });
    await db.collection('banned').doc(uid).set({});
  }
});
