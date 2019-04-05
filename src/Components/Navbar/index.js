import React from 'react';
import { Link } from 'react-router-dom';
import { css } from 'styled-components/macro';
import AuthUtils from '../../utils/AuthUtils';
import NavbarLink from '../uiComponents/NavbarLink';

const AuthLink = ({ AuthComponent, unAuthComponent }) => {
  if (AuthUtils.isUserloggedIn()) return AuthComponent;
  else return unAuthComponent;
};

const Navbar = () => (
  <nav>
    <ul
      css={css`
        display: flex;
        flex-direction: row;
        list-style: none;
        margin: 0 0 0 0;
        background-color: #3c3c3c;
      `}>
      <NavbarLink>
        <AuthLink
          AuthComponent={<Link to='/dashboard'>Dashboard</Link>}
          unAuthComponent={<Link to='/login'>Login</Link>}
        />
      </NavbarLink>
      <NavbarLink>
        <Link to='/categories'>Categories</Link>
      </NavbarLink>
    </ul>
  </nav>
);

export default Navbar;
