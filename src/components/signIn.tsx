import styled from '@emotion/styled';
import React from 'react';
import Button from './button';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  p {
    margin-top: 20px;
  }
`;

const SignIn = ({ onSignIn }: { onSignIn: () => void }) => (
  <Wrapper>
    <Button onClick={onSignIn} title="Sign in">
      Sign in with Google
    </Button>
    <p>Using inappropriate language in chat will result in a lifetime ban.</p>
  </Wrapper>
);

export default SignIn;
