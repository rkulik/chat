import styled from '@emotion/styled';

const Layout = styled.div`
  height: 100vh;
`;

export const Header = styled.header`
  background: #ededed;
  border-bottom: 1px solid #dadada;
  padding: 0 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
`;

export const Main = styled.main`
  height: calc(100vh - 60px);
`;

export default Layout;
