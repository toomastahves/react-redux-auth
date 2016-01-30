import React, { PropTypes } from 'react';
import style from '../../style.css';
import { connect } from 'react-redux';
import { logout } from '../../actions/logoutActions';

const handleLogout = (props) => {
  props.dispatch(logout());
};

export const Header = (props) => {
  let loginInfo = (
    <span>
      <a className={style.login} href='#login'>{'Login'}</a>
      {' / '}
      <a className={style.login} href='#signup'>{'Signup'}</a>
    </span>
  );
  if(props.username) {
    loginInfo = (
      <span>
        {props.username}
        <a onClick={handleLogout.bind(this, props)} href='#'>{'Logout'}</a>
      </span>);
  }
  return (
    <div className={style.header}>
      <span>{'Logo'}</span>
      <span>{'Demo app'}</span>
      {loginInfo}
    </div>
  );
};
Header.propTypes = {
  username: PropTypes.string
};

const mapStateToProps = (state) => {
  return {
    username: state.authReducers.username
  };
};

export default connect(mapStateToProps)(Header);
