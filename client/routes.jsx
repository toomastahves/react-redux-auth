import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import AboutPage from './components/pages/AboutPage';
import HomePage from './components/pages/HomePage';

const AppRoutes = (
  <Route path='/' component={App}>
    <IndexRoute component={HomePage} />
    <Route path='home' component={HomePage} />
    <Route path='about' component={AboutPage} />
  </Route>
);

export default AppRoutes;
