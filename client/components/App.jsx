import React, { PropTypes } from 'react';
import style from '../style.css';
import Menu from './menu/';
import Header from './header/';
import Footer from './footer/';
import { connect } from 'react-redux';
import { loginJWT } from '../actions/loginActions';

export const App = (props) => {
  return (
    <div className={style.container}>
      <Header />
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

const mapDispatchToProps = (dispatch) => {
  const token = localStorage.getItem('jwt');
  if(token) {
    dispatch(loginJWT({ token }));
  }
  return {};
};

export default connect(null, mapDispatchToProps)(App);
