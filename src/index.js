import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import { setupCognito, cognito } from 'react-cognito';
import PageContainer from './components/PageContainer';
import config from './config.json';
import './css/page.css';

const reducers = combineReducers({
    cognito,
});

let store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

setupCognito(store, config);

ReactDOM.render(
  <Provider store={store}>
    <PageContainer />
  </Provider>,
  document.getElementById('root'));
