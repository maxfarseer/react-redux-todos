import React from 'react';
import App from './containers/App';
import HashHistory from 'react-router/lib/HashHistory'

const history = new HashHistory();

React.render(
  <App history={history} />,
  document.getElementById('root')
);
