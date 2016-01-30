import { combineReducers } from 'redux';
import authReducers from './authReducers';
import { routeReducer } from 'react-router-redux';

const reducers = combineReducers({
  authReducers,
  routeReducer
});

export default reducers;
