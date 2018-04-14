import React from 'react';
import ReactDOM from "react-dom";
import {SearchkitManager} from 'searchkit';
import {SearchkitProvider} from 'searchkit';
import axios from 'axios';
// import {
//     SearchBox,
//     RefinementListFilter,
//     Hits,
//     HitsStats,
//     SearchkitComponent,
//     SelectedFilters,
//     MenuFilter,
//     HierarchicalMenuFilter,
//     Pagination,
//     ResetFilters
//     } from "searchkit";
import SearchResults from './SearchResults';

class SearchForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      inputValue: '',
      data: [],
      showResults: false,
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
      this.setState({
        data: data.data.codes,
        showResults: true
      })
    })
  }

  onPageClick = (e) => {
    e.preventDefault()
    axios.get(`http://localhost:5400/_search.json?q=${this.state.inputValue}&page=${this.state.page}`).then((data) => {
      this.setState({
        data: data.data.codes,
        showResults: true
      })
    })
  }


  render() {
    const mainSearchForm = (
      <div>
        <h1 className="icd">ICD-10 Medical Coding Reference</h1>
        <div className="rectangle-5 search-form">
          <form>
            <input type="text"
              onChange={this.onChange}
              data-qa="query" className="sk-search-box__text"
              placeholder="Search" value={this.state.inputValue} />
            <input type="submit" className="button" value="Search" onClick={this.onSearchClick} />
          </form>
        </div>
        <h2>This website is a free reference tool designed for the fast lookup of all current American ICD-10-CM (diagnosis) and ICD-10-PCS (procedure) medical billing codes.</h2>
      </div>
    );

    const searchResultsContainer = (

        <SearchResults results={this.state.data}/>

    );

    return (
      this.state.showResults ? searchResultsContainer : mainSearchForm
    )
  }
}

export default SearchForm;
