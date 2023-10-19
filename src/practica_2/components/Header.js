import React from 'react';
import Title from './Title';

function Header({ pageTitle }) {
  return (
    <header>
      <Title title={pageTitle} />
    </header>
  );
}

export default Header;