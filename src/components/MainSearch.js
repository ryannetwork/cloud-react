import React from 'react';
import SearchForm from './SearchForm'

class MainSearch extends React.Component {

   render() {
      return (
          <SearchForm user={this.props.user}/>
      )
   }
}

export default MainSearch;
