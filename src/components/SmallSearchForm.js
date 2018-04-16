import React from 'react';
import axios from 'axios';
import Pagination from "react-js-pagination";
import SearchResults from './SearchResults';
import '../css/smallsearchform.css';

class SmallSearchForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      inputValue: '',
      data: [],
      showResults: false,
      total: 0,
      activePage: 1
    }
  }

  onChange = (event) => {
    this.setState({
      inputValue: event.target.value,
    })
  }

  onSearchClick = (e) => {
    e.preventDefault()
    axios.get(`http://localhost:5400/_search.json?q=${this.state.inputValue}`).then((data) => {
      console.log(data.data)
      this.setState({
        data: data.data.codes,
        showResults: true,
        total: data.data.total
      })
    })
  }

  render() {

    const secondarySearchForm = (
      <form className="small-search-form">
        <input type="text"
          onChange={this.onChange}
          data-qa="query" className="sk-search-box__text"
          placeholder="Search" value={this.state.inputValue} />
        <input type="submit" className="button" value="Search" onClick={this.onSearchClick} />
      </form>

    );

    const smallSearchResultsContainer = (
      <div className="main-code-container results">
        <h1>ICD-10 Medical Coding Reference</h1>
        <div className="searchResults">
          <SmallSearchForm />
          <SearchResults results={this.state.data} total={this.state.total} inputValue={this.state.inputValue} />
          <Pagination
            activePage={this.state.activePage}
            itemsCountPerPage={50}
            totalItemsCount={this.state.total}
            pageRangeDisplayed={5}
            onChange={this.handlePageChange}
            />
        </div>
      </div>
    );
  return (
    this.state.showResults ? smallSearchResultsContainer : secondarySearchForm
    )
  }
}

export default SmallSearchForm;
