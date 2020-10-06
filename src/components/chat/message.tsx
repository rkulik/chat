import css from '@emotion/css';
import styled from '@emotion/styled';
import React from 'react';

const sent = css`
  color: white;
  background: #cb6764;
  align-self: flex-end;
`;

const received = css`
  background: #d8d8d8;
  color: black;
`;

const Wrapper = styled.div<{ status: MessageStatus }>`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  flex-direction: ${props => (props.status === 'received' ? 'row' : 'row-reverse')};
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
    ${props => props.status === 'sent' && sent}
    ${props => props.status === 'received' && received}
  }
`;

type MessageStatus = 'sent' | 'received';

interface MessageProps {
  userId: string;
  status: MessageStatus;
  text: string;
}

export const Message = ({ userId, status, text }: MessageProps) => (
  <Wrapper status={status}>
    <img src={`https://avatars.dicebear.com/api/human/${userId}/.svg`} alt="" />
    <p>{text}</p>
  </Wrapper>
);
