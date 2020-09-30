import React from 'react';
import styled from '@emotion/styled';

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

const Form = () => (
  <form style={{ display: 'flex' }}>
    <Input type="text" />
    <Button type="submit" title="send">
      <span role="img" aria-label="send">
        🚀
      </span>
    </Button>
  </form>
);

export default Form;
