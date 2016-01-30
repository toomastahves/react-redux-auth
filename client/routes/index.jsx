import React from 'react';
import { Router, Route, IndexRoute, useRouterHistory } from 'react-router';
import { createHashHistory } from 'history';
import App from '../components/App';
import Login from '../components/pages/Login';
import Signup from '../components/pages/Signup';
import Pets from '../components/pages/Pets';
import Home from '../components/pages/Home';
import Users from '../components/pages/Users';

const appHistory = useRouterHistory(createHashHistory)({ queryKey: false });

export const Routes = () => {
  return (
    <Router history={appHistory}>
      <Route path='/' components={App} >
        <IndexRoute component={Home} />
        <Route path='home' component={Home} />
        <Route path='login' components={Login} />
        <Route path='signup' components={Signup} />
        <Route path='pets' components={Pets} />
        <Route path='users' components={Users} />
      </Route>
    </Router>
  );
};

export default Routes;
