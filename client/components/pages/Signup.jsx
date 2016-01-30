import React from 'react';
import { connect } from 'react-redux';
import { signup } from '../../actions/signupActions';
import style from '../../style.css';

const handleSignup = (props, e) => {
  e.preventDefault();
  const username = e.target.querySelector('[name="username"]').value;
  const password = e.target.querySelector('[name="password"]').value;
  props.dispatch(signup({ username, password }));
};

export const Signup = (props) => {
  return (
    <div className={style.authForm}>
      <div>{'Sign up here'}</div>
      <div>{props.error}</div>
      <form onSubmit={handleSignup.bind(this, props)}>
        <div><input name='username' /></div>
        <div><input name='password' /></div>
        <div><button>{'Sign up'}</button></div>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    error: state.authReducers.error
  };
};

export default connect(mapStateToProps)(Signup);
