import React, { Component, PropTypes } from 'react';

class Content extends Component {
  static displayName = 'Content';

  static propTypes = {
    children: PropTypes.object.isRequired
  };

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

export default Content;
