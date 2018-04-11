import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import { setupCognito, cognito } from 'react-cognito';
import App from './App';
import SearchForm from './components/SearchForm'
import { Layout, TopBar, LayoutBody, SideBar, HierarchicalMenuFilter, LayoutResults,
 ActionBar, ActionBarRow, HitsStats, SelectedFilters, ResetFilters, MovieHitsGridItem, NoHits,
  SearchkitManager, SearchkitProvider, SearchkitComponent, SearchBox, Hits,  RefinementListFilter
} from "searchkit"

import config from './config.json';

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
        <SearchBox
        searchOnChange={true}
        queryOptions={{analyzer:"standard"}}
        queryFields={["title^5", "languages", "text"]}/>/>
        <Hits/>
      </div>
    )
  }
}

const searchkit = new SearchkitManager("/");

ReactDOM.render((
    <SearchkitProvider searchkit={searchkit}>
    <div>
      <SearchBox/>
      <RefinementListFilter id="actors" field="actors.raw"/>
      <Hits/>
    </div>
    </SearchkitProvider>
),  document.getElementById('root'))
// ReactDOM.render((
//   <SearchkitProvider searchkit={searchkit}>
// <Layout>
//   <TopBar>
//     <SearchBox
//       autofocus={true}
//       searchOnChange={true}
//       prefixQueryFields={["actors^1","type^2","languages","title^10"]}/>
//   </TopBar>
//   <LayoutBody>
//     <SideBar>
//       <RefinementListFilter
//         id="codes"
//         title="Codes"
//         field="codes.raw"
//         operator="AND"
//         size={10}/>
//     </SideBar>
//     <LayoutResults>
//       <ActionBar>
//
//         <ActionBarRow>
//           <HitsStats/>
//         </ActionBarRow>
//
//         <ActionBarRow>
//           <SelectedFilters/>
//           <ResetFilters/>
//         </ActionBarRow>
//
//       </ActionBar>
//       <Hits mod="sk-hits-grid" hitsPerPage={10} itemComponent={MovieHitsGridItem}
//         sourceFilter={["title", "poster", "imdbId"]}/>
//       <NoHits/>
//     </LayoutResults>
//   </LayoutBody>
// </Layout>
// </SearchkitProvider>
// 
// ),  document.getElementById('root'))
