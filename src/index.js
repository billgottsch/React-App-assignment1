import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

ReactDOM.render(
  <App assignments={['Solve 1st World Problems','Learn more JavaScript!','Make pizza', 'Concat with the cat']} />,
  document.getElementById('root')
);
