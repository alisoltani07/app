import styled from 'styled-components';

const AppLink = styled.a`
  color: #09070e;
  &:hover {
    background-color: ${props => props.activeBackgroundColor};
  }
  &:hover,
  &:active,
  &:link {
    text-decoration: none;
  }
`;

export default AppLink;
