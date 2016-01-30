import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

ReactDOM.render(<App />, document.getElementById('root'));

/*
import store from './store/';
import { signUp } from './actions/signupActions';
import { login } from './actions/loginActions';
import { logout } from './actions/logoutActions';

store.subscribe(() => {
  console.log(store.getState());
});

// store.dispatch(signUp({ email: 'tom', password: 'pom' }));
// store.dispatch(login({ email: 'tom', password: 'pom' }));
// store.dispatch(logout());
*/
