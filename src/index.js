import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import { setupCognito, cognito } from 'react-cognito';
import PageContainer from './components/MainContainer';
import App from './App';
import config from './config.json';

const reducers = combineReducers({
    cognito,
});

let store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// config.group = 'admins'; // Uncomment this to require users to be in a group 'admins'
setupCognito(store, config);

ReactDOM.render(
  <Provider store={store}>
    {/* <App /> */}
    <PageContainer />
  </Provider>,
  document.getElementById('root'));
