import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_ERROR } from '../constants/authConstants';
import { AUTH_URI } from '../constants/uriConstants';
import fetch from 'isomorphic-fetch';

export const loginRequest = () => {
  return {
    type: LOGIN_REQUEST
  };
};

export const loginResponse = (data) => {
  if(data.error) {
    return { type: LOGIN_ERROR, error: data.error };
  }
  localStorage.setItem('jwt', data.token);
  return { type: LOGIN_SUCCESS, username: data.email };
};

export const loginError = (error) => {
  return {
    type: LOGIN_ERROR,
    error
  };
};

export const login = (user) => {
  return dispatch => {
    dispatch(loginRequest());
    return fetch(`${AUTH_URI}/auth/login`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: user.username,
        password: user.password
      })
    })
    .then(response => response.json())
    .then(data => dispatch(loginResponse(data)))
    .catch(error => dispatch(loginError(error)));
  };
};

export const loginJWT = (token) => {
  return dispatch => {
    dispatch(loginRequest());
    return fetch(`${AUTH_URI}/loginjwt`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'x-access-token': token.token
      }
    })
    .then(response => response.json())
    .then(data => dispatch(loginResponse(data)))
    .catch(error => dispatch(loginError(error)));
  };
};
