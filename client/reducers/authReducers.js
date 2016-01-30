import * as actions from '../constants/authConstants';

const initialState = {
  fetching: false,
  username: '',
  error: ''
};

const authReducers = (state = initialState, action) => {
  switch(action.type) {

    case actions.SIGNUP_REQUEST:
      return Object.assign({}, state, { fetching: true });
    case actions.SIGNUP_SUCCESS:
      return Object.assign({}, state, { fetching: false, username: action.username });
    case actions.SIGNUP_ERROR:
      return Object.assign({}, state, { fetching: false, error: action.error });

    case actions.LOGIN_REQUEST:
      return Object.assign({}, state, { fetching: true });
    case actions.LOGIN_SUCCESS:
      return Object.assign({}, state, { fetching: false, username: action.username });
    case actions.LOGIN_ERROR:
      return Object.assign({}, state, { fetching: false, error: action.error });

    case actions.LOGOUT_SUCCESS:
      return Object.assign({}, state, { username: '' });

    default:
      return state;
  }
};

export default authReducers;
