import styled from 'styled-components';

const NavbarLink = styled.li`
  padding: 16px;
  & * {
    color: #fcfcfc;
  }
  &:hover {
    cursor: pointer;
  }
  & a:link,
  & a:active,
  & a:visited {
    text-decoration: none;
  }
`;

export default NavbarLink;
