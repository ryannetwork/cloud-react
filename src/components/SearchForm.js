import React from 'react';
import ReactDOM from "react-dom";
import axios from 'axios';
import Pagination from "react-js-pagination";
import SearchResults from './SearchResults';
import '.././css/searchform.css';
import SmallSearchForm from './SmallSearchForm';


class SearchForm extends React.Component {
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

  handlePageChange = (pageNumber) => {
      console.log(`active page is ${pageNumber}`);
      this.setState({
        activePage: pageNumber
      });
      this.changePage(pageNumber);
  }

  changePage = (pageNumber) => {
    console.log(this.state);
    axios.get(`http://localhost:5400/_search.json?q=${this.state.inputValue}&page=${pageNumber}`)
      .then((data) => {
        console.log(data)
        this.setState({
          data: data.data.codes,
          showResults: true
        })

      })
  }

  render() {
    const mainSearchForm = (
      <div className="main-code-container">
        <div className="searchContainer">
          <h1 className="icd">ICD-10 Medical Coding Reference</h1>
          <div className="rectangle-5 search-form">
            <form>
              <input type="text"
                onChange={this.onChange}
                data-qa="query" className="sk-search-box__text"
                placeholder="Search ICD-10 code, keyword or description" value={this.state.inputValue} />
              <input type="submit" className="button" value="Search" onClick={this.onSearchClick} />
            </form>
          </div>
          <h2>This website is a free reference tool designed for the fast lookup of all current American ICD-10-CM (diagnosis) and ICD-10-PCS (procedure) medical billing codes.</h2>
        </div>
      </div>
    );

    const searchResultsContainer = (
      <div className="main-code-container">
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
      this.state.showResults ? searchResultsContainer : mainSearchForm
    )
  }
}

export default SearchForm;
