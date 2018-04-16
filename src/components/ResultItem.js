import React from 'react';
import ReactDOM from 'react-dom';
import '../css/resultItem.css';
import bookmark from '../images/bookmark-small-serp.png';
import Highlighter from 'react-highlight-words';
import axios from 'axios';


class ResultItem extends React.Component {
  constructor(props){
    super(props);
    this.createBookmark = this.createBookmark.bind(this);
  }

  createBookmark(e){
    e.preventDefault();
    const codeID = this.props.itemValue.code_id
    console.log(codeID);

    axios.post('http://localhost:5400/favorite/create/', {
              code_id: codeID,
              user_id: this.props.user.username 
          })
          .then((data) => {
            console.log('call to create a favorite')
          })
  }

    render() {
        var itemContent = this.props.itemValue;
        var input = this.props.inputValue;
        return(
            <a href={`/icd-10/codes/${itemContent.code_id}`} className="codeLink">
              <button onClick={this.createBookmark} className="bookmark"><img src={bookmark} alt="bookmark"/></button>
              <span className="codeNum">{itemContent.code_id}</span>
              <span className="codeDesc">
                <Highlighter
                  highlightClassName='highlighter'
                  searchWords={[input]}
                  autoEscape={true}
                  textToHighlight={itemContent.desc}
                />
             </span>
            </a>
        )
    }
}


export default ResultItem;
