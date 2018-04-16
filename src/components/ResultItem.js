import React from 'react';
import ReactDOM from 'react-dom';
import '../css/resultItem.css';
import bookmark from '../images/bookmark-small-serp.png';
import Highlighter from 'react-highlight-words'


class ResultItem extends React.Component {
  constructor(props){
    super(props);
  }

    render() {
        var itemContent = this.props.itemValue;
        var input = this.props.inputValue;
        return(
            <a href={`/icd-10/codes/${itemContent.code_id}`} className="codeLink">
              <button className="bookmark"><img src={bookmark} alt="bookmark"/></button>
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
