'use strict';
import React, { Component } from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import createHashHistory from 'history/lib/createHashHistory';
let history = createHashHistory();

import Index from '../components/Index';
import Home from '../components/home/index';
import About from '../components/about/index';
import NotFound from '../components/common/NotFound';

class RouterConfig extends Component {
  render() {
    return(
      <Router history={history}>
        <Route path='/' component={Index}>
          <IndexRoute component={Home} />
          <Route path='home' component={Home} />
          <Route path='about' component={About} />
          <Route path='*' status={404} component={NotFound} />
        </Route>
      </Router>
    );
  }
}

export default RouterConfig;
