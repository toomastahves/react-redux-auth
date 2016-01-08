import React, { Component, PropTypes } from 'react';
import Header from './header/Header';
import Footer from './footer/Footer';
import Content from './content/Content';

class App extends Component {
  static displayName = 'App';

  static propTypes = {
    children: PropTypes.object.isRequired
  };

  render() {
    return (
      <div>
        <Header />
        <Content children={this.props.children} />
        <Footer />
      </div>
    );
  }
}

export default App;
