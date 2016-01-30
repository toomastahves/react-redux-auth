import React, { PropTypes } from 'react';
import style from '../style.css';
import Menu from './Menu';
import { connect } from 'react-redux';
import { routeActions } from 'react-router-redux';

export const App = (props) => {
  return (
    <div className={style.center}>
      <Menu />
      {props.children}
    </div>
  );
};

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default connect(null, routeActions)(App);
