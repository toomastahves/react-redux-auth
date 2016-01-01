'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import RouterConfig from './config/RouterConfig';

(() => {
  let div = document.createElement('div');
  document.body.appendChild(div);
  ReactDOM.render(<RouterConfig />, div);
})();
