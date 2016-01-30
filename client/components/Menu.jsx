import React from 'react';
import { Link } from 'react-router';

export const Menu = () => {
  return (
    <div>
      <Link to='home'>{'Home'}</Link>
      <Link to='pets'>{'Pets'}</Link>
      <Link to='auth'>{'Auth'}</Link>
    </div>
  );
};

export default Menu;
