import React from 'react';
import { render } from 'react-dom';
import { Router } from 'react-router';
import AppRoutes from './routes';
import createHistory from 'history/lib/createHashHistory';

render(
  <Router history={createHistory({ queryKey: false })}>
    {AppRoutes}
  </Router>,
  document.getElementById('app')
);
