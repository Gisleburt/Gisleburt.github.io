import styled from 'styled-components';

const Nav = styled.nav`
  font-weight: bold;
  padding: 5px 0;

  ul,
  ol {
    display: flex;
  }

  a {
    color: #a7b8c9;
    display: block;
    padding: 3px 5px;
    text-decoration: none;
  }
`;
Nav.displayName = 'Nav';

export default Nav;
