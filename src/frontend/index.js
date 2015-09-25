import React from 'react';
import Root from './Root';
import History from 'react-router/lib/History';

React.render(
  <Root history={ new History() } />,
  document.getElementById('container')
);
