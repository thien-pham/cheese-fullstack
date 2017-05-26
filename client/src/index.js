import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import CheeseList from './components/cheese-list';
import store from './store'; 
import App from './App';
import './index.css';

//  const cheeses = [
//         "Bath Blue",
//         "Barkham Blue",
//         "Buxton Blue"];



ReactDOM.render(
  <Provider store={store} >
    <CheeseList />
  </Provider>,
  document.getElementById('root')
);


