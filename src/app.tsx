import React from 'react';
import Button from './components/button';
import Chat, { Message } from './components/chat';
import Form from './components/form';
import Layout, { Footer, Header } from './components/layout';

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
    <Chat>
      <Message type="sent">Foo</Message>
      <Message type="received">Bar</Message>
    </Chat>
    <Footer>
      <Form />
    </Footer>
  </Layout>
);

export default App;
