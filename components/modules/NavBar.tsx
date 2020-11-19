import React from 'react';
import { Content } from '../../types/domain';
import Nav from './Nav';

type Props = {
  navBar: Content.NavBar;
};

const NavBar = ({ navBar }: Props): JSX.Element => (
  <Nav>
    <ul>
      {navBar.links.map((link) => (
        <li key={link.id}>
          <a href={link.url}>{link.text}</a>
        </li>
      ))}
    </ul>
  </Nav>
);

export default NavBar;
