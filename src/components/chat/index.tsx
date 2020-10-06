import styled from '@emotion/styled';
import React from 'react';
import Form from './form';
import { Message } from './message';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Messages = styled.div`
  background-image: url('./geometry.png');
  flex: 1;
  padding: 10px 10px 0;
  overflow-y: scroll;
`;

const Chat = () => (
  <Wrapper>
    <Messages>
      <Message userId="1" status="sent" text="lol" />
      <Message userId="2" status="received" text="haha!" />
      <Message userId="2" status="received" text="haha!" />
      <Message userId="2" status="received" text="haha!" />
      <Message userId="2" status="received" text="haha!" />
      <Message userId="2" status="received" text="haha!" />
      <Message userId="2" status="received" text="haha!" />
      <Message userId="2" status="received" text="haha!" />
      <Message userId="2" status="received" text="haha!" />
      <Message userId="2" status="received" text="haha!" />
      <Message userId="2" status="received" text="haha!" />
      <Message userId="2" status="received" text="haha!" />
      <Message userId="2" status="received" text="haha!" />
      <Message userId="2" status="received" text="haha!" />
      <Message userId="2" status="received" text="haha!" />
      <Message userId="2" status="received" text="haha!" />
      <Message userId="2" status="received" text="haha!" />
      <Message userId="2" status="received" text="haha!" />
      <Message userId="2" status="received" text="haha!" />
      <Message userId="2" status="received" text="haha!" />
      <Message userId="2" status="received" text="haha!" />
      <Message userId="2" status="received" text="haha!" />
      <Message userId="2" status="received" text="haha!" />
      <Message userId="2" status="received" text="haha!" />
      <Message userId="2" status="received" text="haha!" />
      <Message userId="2" status="received" text="haha!" />
      <Message userId="2" status="received" text="haha!" />
      <Message userId="2" status="received" text="haha!" />
      <Message userId="2" status="received" text="haha!" />
      <Message userId="2" status="received" text="haha!" />
      <Message userId="2" status="received" text="haha!" />
      <Message userId="2" status="received" text="haha!" />
      <Message userId="2" status="received" text="haha!" />
      <Message userId="2" status="received" text="haha!" />
      <Message userId="2" status="received" text="haha!" />
      <Message userId="2" status="received" text="haha!" />
      <Message userId="2" status="received" text="haha!" />
      <Message userId="2" status="received" text="haha!" />
      <Message userId="2" status="received" text="haha!" />
      <Message userId="2" status="received" text="haha!" />
      <Message userId="2" status="received" text="haha!" />
    </Messages>
    <Form />
  </Wrapper>
);

export default Chat;
