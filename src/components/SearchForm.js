import React from 'react';
import ReactDOM from "react-dom";
import {SearchkitManager} from 'searchkit';
import {SearchkitProvider} from 'searchkit';
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
  render() {
    const searchkit = new SearchkitManager("http://localhost:5400/search")
    return (
      <SearchkitProvider searchkit={searchkit}>
      </SearchkitProvider>
    )
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
