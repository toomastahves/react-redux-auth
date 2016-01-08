import React, { Component } from 'react';
import { Link } from 'react-router';

class Header extends Component {
  static displayName = 'Header';
  render() {
    return (
      <div>
        <Link to='home'>{'Home'}</Link>
        <Link to='about'>{'About'}</Link>
      </div>
    );
  }
}

export default Header;
