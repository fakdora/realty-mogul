import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import reducer from './reducers'
import { contents as contentsData } from './utils/_DATA'
import './index.css';


const store = createStore(reducer, {contents: contentsData})

ReactDOM.render(
  <Provider store={store}>
    <App /> 
  </Provider>, 
  document.getElementById('root'));
registerServiceWorker();
