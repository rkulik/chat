import React from 'react';
import Button from './components/button';
import Chat from './components/chat';
import Layout, { Header, Main } from './components/layout';
import SignIn from './components/signIn';
import { signIn, signOut } from './services/auth';
import { sendMessage } from './services/messages';
import useMessages from './utils/use-messages';
import useUser from './utils/use-user';

const App = () => {
  const user = useUser()
  const messages = useMessages()

  return (
    <Layout>
      <Header>
        <h1>
          <span role="img" aria-label="Chat">
            📝
          </span>
        </h1>
        {user && (
          <Button title="Sign out" onClick={signOut}>
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
