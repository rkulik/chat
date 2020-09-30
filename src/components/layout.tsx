import styled from '@emotion/styled';

const Layout = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.header`
  background: #ededed;
  border-bottom: 1px solid #dadada;
  padding: 10px;
  display: flex;
  justify-content: space-between;
`;

export const Footer = styled.footer`
  background: #ededed;
  border-top: 1px solid #dadada;
  padding: 10px;
`;

export default Layout;
