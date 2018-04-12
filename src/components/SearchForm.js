import React from 'react';
import ReactDOM from "react-dom";
import {SearchkitManager} from 'searchkit';
import {SearchkitProvider} from 'searchkit';
import axios from 'axios';
import {
    SearchBox,
    RefinementListFilter,
    Hits,
    HitsStats,
    SearchkitComponent,
    SelectedFilters,
    MenuFilter,
    HierarchicalMenuFilter,
    Pagination,
    ResetFilters
    } from "searchkit";

class SearchForm extends React.Component {
  state = {
    inputValue: '',
    data: []
  }

  onChange = (event) => {
    this.setState({
      inputValue: event.target.value
    })

    // axios.get(`http://localhost:5400/_search.json?q=${event.target.value}`).then((data) => {
    //   console.log("=data", data)
    // })
  }

  onSearchClick = (e) => {
    e.preventDefault()
    axios.get(`http://localhost:5400/_search.json?q=${this.state.inputValue}`).then((data) => {
      this.setState({
        data: data.data.codes
      })
    })
  }

  render() {

    // <input type="text" data-qa="query" class="sk-search-box__text" placeholder="Search" value="fe">
    return (
      <div>
        <form>
          <input type="text"
            onChange={this.onChange}
            data-qa="query" class="sk-search-box__text"
            placeholder="Search" value={this.state.inputValue} />
          <input type="submit" class="button" value="Search" onClick={this.onSearchClick} />
        </form>
        <h1>Codes!</h1>
        {this.state.data.length > 0 && this.state.data.map((code) => {
          return (
            <div>
              <h6>Code:</h6> <span>{code.code_id}</span>
              <h6>Desc:</h6> <span>{code.desc}</span>
            </div>
          )
        })}
      </div>
    )
    // return (
    //   <SearchkitProvider searchkit={searchkit}>
    //     <SearchBox
    //       autofocus={true}
    //       searchOnChange={true}
    //       prefixQueryFields={["actors^1","type^2","languages","title^10"]}/>
    //     </SearchkitProvider>
    // )
  }
}

// import React from 'react';
// import {
//   Form,
//   FormGroup,
//   FormControl,
//   Button
// }

// const SearchForm = () => (
//   <Form inline>
//     <FormGroup controlId="formInlineEmail">
//       <FormControl type="search" placeholder="Enter something ..." />
//     </FormGroup>
//     <Button type="submit">
//       search
//     </Button>
//   </Form>
// );

export default SearchForm;
