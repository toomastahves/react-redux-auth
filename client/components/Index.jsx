'use strict';
import React, { Component } from 'react';
import Header from './header/index';
import Footer from './footer/index';

class Index extends Component {
  render() {
    return (
      <div>
        <Header />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default Index;
