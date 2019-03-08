import React from 'react';
import ReactDOM from 'react-dom';
/*Components*/
import App from './App';
/*Dependencies*/
import { createStore } from 'redux';
import { Provider } from 'react-redux';
//import thunk from 'redux-thunk';
//import { BrowserRouter as Router } from 'react-router-dom';

//Temp reducer function
function reducer() {
  return {
    state: 'temp state'
  }
}

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
