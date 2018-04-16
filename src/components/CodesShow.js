import React from 'react';
import axios from 'axios';
import '../css/codeshow.css';
import SmallSearchForm from './SmallSearchForm';
import bookmark from '../images/bookmarks-icon.png';
import bookmarkBlue from '../images/bookmark-blue.png';


class CodesShow extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      code_id: this.props.match.params.code_id,
      main: {},
      children: []
    }
  }

  // createBookmark(){
  //   // const codeID = this.params.id;
  //
  //   axios.post('http://localhost:5400/favorite/create/', {
  //             // code_id: {codeID},
  //             // user_id: '1'
  //         })
  //         .then((data) => {
  //           console.log('call to create a favorite')
  //         })
  // }

  componentWillMount(){

    if (localStorage.getItem("recents") !== null){

      var existingRecents = localStorage.getItem('recents').split(',');
      existingRecents.push(this.state.code_id);
      existingRecents = [...new Set(existingRecents)];
      localStorage.setItem('recents', existingRecents.join(','))

    } else {
      console.log('nothing in local st');
      var recent = [];
      recent.push(this.state.code_id);
      localStorage.setItem('recents', recent);
      localStorage.setItem('recents', recent.join(this.state.code_id));
    }

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
      <div className="main-code-container code">
        <h1 className="icd">ICD-10 Medical Coding Reference</h1>
        <SmallSearchForm />

          <div className="code-item">
            <div>
                <p>{this.state.main.code_id}</p>
                <p>{this.state.main.desc}</p>
            </div>
            <div>
                <button className="bookmark"><img src={bookmark} alt="bookmark"/>Bookmark</button>
            </div>
          </div>

          <ul className="childContainer">
            {this.state.children.map((code, _i) => {
              return(
                <li className="child" key={_i}>
                  <button className="bookmark"><img src={bookmarkBlue} alt="bookmark"/></button>
                  <p className="code">{code.code_id}</p>
                  <p className="desc">{code.desc}</p>
                </li>
              )
            })}
          </ul>
      </div>
    )
  }
}

export default CodesShow;
