import React from 'react';
import ReactDOM from 'react-dom';


class SearchResults extends React.Component {

    render() {
        var searchResult = this.props.results;

        return(
            <div>
                <h1>Search Results</h1>
                  {searchResult.map((code) => {
                      return (
                          <div>
                              <h6>Code:</h6> <span>{code.code_id}</span>
                              <h6>Desc:</h6> <span>{code.desc}</span>
                          </div>
                      )
                  })}
            </div>
        )
    }

}

export default SearchResults;
