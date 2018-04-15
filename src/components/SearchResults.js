import React from 'react';
import ReactDOM from 'react-dom';
import ResultItem from './ResultItem';
import '../css/searchResults.css';


class SearchResults extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    var searchResult = this.props.results;

    return(
      <div>
        <span className="numFound">{searchResult.length} results found</span>
        <ul className="serchResults">
        {searchResult.map((code, index) => {
          return(
            <li>
              <ResultItem itemValue={code} key={index}/>
            </li>
          )
        })}
        </ul>
      </div>
    )
  }
}
export default SearchResults;
