import React from 'react';
import { Router, Route, IndexRoute, useRouterHistory } from 'react-router';
import { createHashHistory } from 'history';
import App from '../components/App';
import Auth from '../components/pages/Auth';
import Pets from '../components/pages/Pets';
import Home from '../components/pages/Home';

const appHistory = useRouterHistory(createHashHistory)({ queryKey: false });

export const Routes = () => {
  return (
    <Router history={appHistory}>
      <Route path='/' components={App} >
        <IndexRoute component={Home} />
        <Route path='home' component={Home} />
        <Route path='auth' components={Auth} />
        <Route path='pets' components={Pets} />
      </Route>
    </Router>
  );
};

export default Routes;
