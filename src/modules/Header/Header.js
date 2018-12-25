import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

export const Header = () => (
  <header className="header">
    <Link className="link logo" to="/">
      <span>BEER</span>
      GURU
    </Link>
  </header>
);
