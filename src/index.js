import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import { setupCognito, cognito } from 'react-cognito';
import App from './App';
import SearchForm from './components/SearchForm'
import {
  SearchkitManager, SearchkitProvider, SearchkitComponent, SearchBox, Hits,  RefinementListFilter
} from "searchkit"

import config from './config.json';

const searchkit = new SearchkitManager("/");
const reducers = combineReducers({
    cognito,
});

let store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// config.group = 'admins'; // Uncomment this to require users to be in a group 'admins'
setupCognito(store, config);

// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//     <SearchForm />
//   </Provider>,
//   document.getElementById('root'));

class SearchApp extends SearchkitComponent {
  render() {
    return (
      <div>
        <SearchBox/>
        <Hits/>
      </div>
    )
  }
}
ReactDOM.render((
    <SearchkitProvider searchkit={searchkit}>
        <div>
            <SearchBox/>
            <RefinementListFilter id="codes" field="codes.raw"/>
            <Hits/>
        </div>
    </SearchkitProvider>
),  document.getElementById('root'))
