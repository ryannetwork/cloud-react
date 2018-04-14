import React from 'react';
import ReactDOM from 'react-dom';
import ResultItem from './ResultItem';


class SearchResults extends React.Component {

    render() {
        var searchResult = this.props.results;

        return(
            <div>
                <h1>Search Results</h1>
                {searchResult.map((code, index) => {
                    console.log(code);
                    return (
                        <ResultItem itemValue={code} key={index}/>

                    )
                })}
            </div>
        )
    }
}
export default SearchResults;
