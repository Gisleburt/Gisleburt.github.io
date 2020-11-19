import React from 'react';
import { Content } from '../../types/domain';

type Props = {
  navBar: Content.NavBar;
};

const NavBar = ({ navBar }: Props): JSX.Element => (
  <nav>
    <ul>
      {navBar.links.map((link) => (
        <li key={link.id}>
          <a href={link.url}>{link.text}</a>
        </li>
      ))}
    </ul>
  </nav>
);

export default NavBar;
