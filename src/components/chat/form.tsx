import styled from '@emotion/styled';
import React, { FormEvent, useState } from 'react';

const Formular = styled.form`
  display: flex;
  background: #ededed;
  border-top: 1px solid #dadada;
  padding: 10px;
`;

const Input = styled.input`
  flex: 1;
  border-radius: 30px;
  border: 1px solid #dadada;
  padding: 10px;
  outline: 0;
`;

const Button = styled.button`
  margin-left: 5px;
  border-radius: 50%;
  border: 1px solid #dadada;
  outline: 0;
  background-color: white;
  height: 35px;
  width: 35px;
  cursor: pointer;
  &:hover {
    background-color: #dadada;
  }
`;

const Form = ({ onSubmit }: { onSubmit: (message: string) => Promise<void> }) => {
  const [message, setMessage] = useState('');
  const [disabled, setDisabled] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!message.length) {
      return;
    }

    setDisabled(true);
    await onSubmit(message);
    setMessage('');
    setDisabled(false);
  };

  return (
    <Formular onSubmit={handleSubmit}>
      <Input type="text" value={message} onChange={event => setMessage(event.target.value)} />
      <Button type="submit" title="send" disabled={disabled}>
        <span role="img" aria-label="send">
          🚀
        </span>
      </Button>
    </Formular>
  );
};

export default Form;
