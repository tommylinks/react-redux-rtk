import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <nav>
    <ul>
      <li>
        <Link to="/deposit">Deposit</Link>
      </li>
      <li>
        <Link to="/borrow">Borrow</Link>
      </li>
    </ul>
  </nav>
);

export default Header;
