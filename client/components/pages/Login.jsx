import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/loginActions';
import style from '../../style.css';

const handleLogin = (props, e) => {
  e.preventDefault();
  const username = e.target.querySelector('[name="username"]').value;
  const password = e.target.querySelector('[name="password"]').value;
  props.dispatch(login({ username, password }));
};

export const Auth = (props) => {
  return (
    <div className={style.authForm}>
      <div>{'Login here'}</div>
      <form onSubmit={handleLogin.bind(this, props)}>
        <div><input name='username' /></div>
        <div><input name='password' /></div>
        <div><button>{'Login'}</button></div>
      </form>
    </div>
  );
};

export default connect()(Auth);
