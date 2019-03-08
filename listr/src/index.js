import React from 'react';
import ReactDOM from 'react-dom';
/*Dependencies*/
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
//import { BrowserRouter as Router } from 'react-router-dom';
//import axios from 'axios';
/*Reducer*/
import rootReducer from './reducers/index.js';
/*Components*/
import App from './App';

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
