import React, { useEffect, useRef, useState } from 'react';
import Button from './components/button';
import Chat from './components/chat';
import Layout, { Header, Main } from './components/layout';
import SignIn from './components/signIn';
import firebase, { auth, db } from './services/firebase';
import { Message } from './types';

const App = () => {
  const [user, setUser] = useState<firebase.User | null>(null);
  const messagesRef = useRef(db.collection('messages'));
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => auth.onAuthStateChanged(user => setUser(user)), []);

  useEffect(() => {
    if (!user) {
      return;
    }

    const query = messagesRef.current.orderBy('createdAt', 'desc').limit(25);

    const fetchMessages = async () => {
      const snapshot = await query.get();
      setMessages(snapshot.docs.reverse().map(snapshot => snapshot.data() as Message));
    };

    fetchMessages();

    const unsubscribe = query.onSnapshot(snapshot => {
      setMessages(snapshot.docs.reverse().map(snapshot => snapshot.data() as Message));
    });

    return () => unsubscribe();
  }, [user]);

  const signIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };

  const sendMessage = async (message: string) => {
    if (!user) {
      return;
    }

    await messagesRef.current.add({
      text: message,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid: user.uid,
      photoURL: user.photoURL,
    });
  };

  return (
    <Layout>
      <Header>
        <h1>
          <span role="img" aria-label="Chat">
            📝
          </span>
        </h1>
        {user && (
          <Button title="Sign out" onClick={() => auth.signOut()}>
            Sign out
          </Button>
        )}
      </Header>
      <Main>
        {!user && <SignIn onSignIn={signIn} />}
        {user && (
          <Chat
            messages={(messages ?? []).map(message => ({
              ...message,
              status: user.uid === message.uid ? 'sent' : 'received',
            }))}
            onSendMessage={sendMessage}
          />
        )}
      </Main>
    </Layout>
  );
};

export default App;
