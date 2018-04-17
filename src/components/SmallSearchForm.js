import React from 'react';
import axios from 'axios';
import Pagination from "react-js-pagination";
import SearchResults from './SearchResults';
import '../css/smallsearchform.css';

class SmallSearchForm extends React.Component {
  constructor(props){
    super(props)
  }

  onChange = (event) => {
      this.props.updateState({
      inputValue: event.target.value,
    })
  }

  onSearchClick = (e) => {
    e.preventDefault()
    axios.get(`http://localhost:5400/_search.json?q=${this.state.inputValue}`).then((data) => {
      console.log(data.data)
      this.props.updateData(data.data.codes)
      this.props.updateState({
        data: data.data.codes,
        total: data.data.total
      })
    })
  }

  render() {

    return(
      <form className="small-search-form">
        <input type="text"
          onChange={this.onChange}
          data-qa="query" className="sk-search-box__text"
          placeholder="Search" value={this.props.inputValue} />
        <input type="submit" className="button" value="Search" onClick={this.onSearchClick} />
      </form>
    )
  }
}

export default SmallSearchForm;
