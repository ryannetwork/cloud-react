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
    var inputValue = this.props.inputValue;

    return(
      <div>
        <span className="numFound">{this.props.results.length} results found</span>
        <ul className="serchResults">
        {this.props.results.map((code, index) => {
          return(
            <li key={index}>
              <ResultItem itemValue={code} key={index} inputValue={inputValue} user={this.props.user}/>
            </li>
          )
        })}
        </ul>
      </div>
    )
  }
}
export default SearchResults;
