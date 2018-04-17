import React from 'react';
import ReactDOM from 'react-dom';
import '../css/resultItem.css';
// import bookmark from '../images/bookmark-small-serp.png';
import bookmarkBlue from '../images/bookmark-blue.png';
import bookmarkFilledBlue from '../images/blue-filled.png';
import Highlighter from 'react-highlight-words';
import axios from 'axios';


class ResultItem extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      srcIndex: 0,
      saved: false
    }
    this.bookmarkImages = [ bookmarkBlue, bookmarkFilledBlue];
    this.bookmark = this.bookmark.bind(this);
  }

  bookmark(e){
    e.preventDefault();

    const codeID = this.props.itemValue.code_id
    console.log(codeID);

    if (this.state.saved){
      this.setState({
        srcIndex: 0,
        saved: false
      })
    }else {

      this.setState({
        srcIndex: 1,
        saved: true
      })

      axios.post('http://localhost:5400/favorite/create/', {
                code_id: codeID,
                user_id: this.props.user.username
            })
            .then((data) => {
              console.log(data)
            })
    }

  }

    render() {
        var itemContent = this.props.itemValue;
        var input = this.props.inputValue;
        var bookmarkIcon = this.bookmarkImages[this.state.srcIndex];

        return(
            <a href={`/icd-10/codes/${itemContent.code_id}`} className="codeLink">
              <button onClick={this.bookmark} className="bookmark"><img src={bookmarkIcon} alt="bookmark"/></button>
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
