import React from 'react';
import ReactDOM from 'react-dom';
import CheeseList from './components/cheese-list';
import { Provider } from 'react-redux';
import store from './store'; 
import App from './App';
import './index.css';

ReactDOM.render(
  <Provider store={store} >
    <CheeseList/>
  </Provider>,
  document.getElementById('root')
);
