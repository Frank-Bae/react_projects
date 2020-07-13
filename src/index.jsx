import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import { createStore, combineReducers } from 'redux';

const store = createStore();

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);
