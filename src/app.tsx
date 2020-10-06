import React from 'react';
import Button from './components/button';
import Chat from './components/chat';
import Layout, { Header, Main } from './components/layout';

const App = () => (
  <Layout>
    <Header>
      <h1>
        <span role="img" aria-label="Chat">
          📝
        </span>
      </h1>
      <Button title="sign out">sign out</Button>
    </Header>
    <Main>
      <Chat />
    </Main>
  </Layout>
);

export default App;
