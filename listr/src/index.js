import React from 'react';
import ReactDOM from 'react-dom';
/*Dependencies*/
import { createStore } from 'redux';
import { Provider } from 'react-redux';
//import thunk from 'redux-thunk';
//import { BrowserRouter as Router } from 'react-router-dom';
/*Reducer*/
import rootReducer from './reducers/index.js';
/*Components*/
import App from './App';

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
