import React from 'react';
import axios from 'axios';


class CodesShow extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      code_id: this.props.match.params.code_id,
      main: {},
      children: []
    }
  }

  componentWillMount(){
    axios.get('http://localhost:5400/codes/'+this.state.code_id)
    .then((data) => {
      console.log(data.data.children)
      this.setState({
        main: data.data.code,
        children: data.data.children
      });
    });
  }

  render(){
    return(
      <div>
        <ul>
          <li>
            <div>Code Id:</div>
            <span>{this.state.main.code_id}</span>
            <div>Description:</div>
            <span>{this.state.main.desc}</span>
          </li>
          <li>
            <div>Children:</div>
            <ol>
              {this.state.children.map((code, _i) => {
                return(
                  <li>
                    <div>Code_id:</div>
                    <span>{code.code_id}</span>
                    <div>Description:</div>
                    <span>{code.desc}</span>
                  </li>
                )
              })}
            </ol>
          </li>
        </ul>
      </div>
    )
  }
}

export default CodesShow;
