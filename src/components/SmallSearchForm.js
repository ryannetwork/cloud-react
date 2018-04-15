import React from 'react';
import axios from 'axios';

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
    axios.get(`http://localhost:3001/_search.json?q=${this.state.inputValue}`).then((data) => {
      console.log(data.data)
      this.setState({
        data: data.data.codes,
        showResults: true,
        total: data.data.total
      })
    })
  }
  
  render() {

    return(
      <form>
        <input type="text"
          onChange={this.onChange}
          data-qa="query" className="sk-search-box__text"
          placeholder="Search ICD-10 code, keyword or description" value={this.state.inputValue} />
        <input type="submit" className="button" value="Search" onClick={this.onSearchClick} />
      </form>
    )
  }
}

export default SmallSearchForm;
