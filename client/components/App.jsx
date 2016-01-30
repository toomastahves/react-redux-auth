import React, { PropTypes } from 'react';
import style from '../style.css';
import Menu from './menu/';
import Header from './header/';
import Footer from './footer/';
import { connect } from 'react-redux';
import { routeActions } from 'react-router-redux';

export const App = (props) => {
  return (
    <div className={style.container}>
      <div className={style.header}><Header /></div>
      <div className={style.content}>
        <Menu />
        <div className={style.main}>
          {props.children}
        </div>
      </div>
      <div className={style.footer}><Footer /></div>
    </div>
  );
};

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default connect(null, routeActions)(App);
