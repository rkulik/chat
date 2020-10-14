import styled from '@emotion/styled';
import React, { useEffect, useRef } from 'react';
import Form from './form';
import Message, { MessageProps } from './message';

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

interface ChatProps {
  messages: MessageProps[];
  onSendMessage: (message: string) => Promise<void>;
}

const Chat = ({ messages, onSendMessage }: ChatProps) => {
  const bottom = useRef<HTMLDivElement>(null);
  const scrollToBottom = () => bottom.current?.scrollIntoView({ behavior: 'smooth' });

  useEffect(() => {
    if (messages.length) {
      scrollToBottom();
    }
  }, [messages]);

  return (
    <Wrapper>
      <Messages>
        {messages.map(({ text, photoURL, status }, index) => (
          <Message key={index} photoURL={photoURL} status={status} text={text} />
        ))}
        <div ref={bottom} />
      </Messages>
      <Form onSubmit={onSendMessage} />
    </Wrapper>
  );
};

export default Chat;
