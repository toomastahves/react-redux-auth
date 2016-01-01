'use strict';
import React, { Component } from 'react';
import ReactRouter, { Link } from 'react-router';

class Header extends Component {
  render() {
    return(
      <div>
        <Link to='home'>Home</Link>
        <Link to='about'>About</Link>
      </div>
    );
  }
}

export default Header;
