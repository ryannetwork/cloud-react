import React from 'react';
import SearchForm from './SearchForm'

class MainSearch extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data: []
    }

    this.updateData = this.updateData.bind(this);
  }

  updateData(data){
    this.setState({
      data: data
    });
  }

  render() {
    return (
      <SearchForm user={this.props.user} updateData={this.updateData} data={this.state.data} />
    )
  }
}

export default MainSearch;
