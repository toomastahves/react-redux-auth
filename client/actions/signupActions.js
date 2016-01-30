import { SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_ERROR } from '../constants/authConstants';
import { AUTH_URI } from '../constants/uriConstants';
import fetch from 'isomorphic-fetch';

export const signupRequest = () => {
  return {
    type: SIGNUP_REQUEST
  };
};

export const signupResponse = (data) => {
  if(data.error) {
    return { type: SIGNUP_ERROR, error: data.error };
  }
  localStorage.setItem('jwt', data.token);
  return { type: SIGNUP_SUCCESS, username: data.email };
};

export const signupError = (error) => {
  return {
    type: SIGNUP_ERROR,
    error
  };
};

export const signup = (user) => {
  return dispatch => {
    dispatch(signupRequest());
    return fetch(`${AUTH_URI}/auth/signup`, {
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
    .then(data => dispatch(signupResponse(data)))
    .catch(error => dispatch(signupError(error)));
  };
};
