/*
 * src/frontend/index.js
 */

import React from 'react';
import { App } from './app.js';
import './scss/index.scss';

React.render(
  <App />,
  document.getElementById('container')
);
