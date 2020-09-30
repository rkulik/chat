import css from '@emotion/css';
import styled from '@emotion/styled';
import React from 'react';

type MessageType = 'sent' | 'received';

const Chat = styled.main`
  background-image: url('./geometry.png');
  flex: 1;
  padding: 10px 10px 0;
`;

const sent = css`
  color: white;
  background: #cb6764;
  align-self: flex-end;
`;

const received = css`
  background: #d8d8d8;
  color: black;
`;

const MessageWrapper = styled.div<{ type: MessageType }>`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  flex-direction: ${props => (props.type === 'received' ? 'row' : 'row-reverse')};
  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin: 0 5px;
  }
  p {
    max-width: 500px;
    margin: 0;
    line-height: 24px;
    padding: 10px 20px;
    border-radius: 25px;
    position: relative;
    color: white;
    text-align: center;
    ${props => props.type === 'sent' && sent}
    ${props => props.type === 'received' && received}
  }
`;

export const Message = ({ type, children }: { type: MessageType; children: string }) => (
  <MessageWrapper type={type}>
    <img src="https://avatars.dicebear.com/api/male/.svg" alt="" />
    <p>{children}</p>
  </MessageWrapper>
);

export default Chat;
