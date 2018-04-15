import React from 'react';
import ReactDOM from 'react-dom';
import '../css/resultItem.css';
import bookmark from '../images/bookmark-small-serp.png';


class ResultItem extends React.Component {
  constructor(props){
    super(props);
  }

    render() {
        var itemContent = this.props.itemValue;
        return(
            <a href={`/icd-10/codes/${itemContent.code_id}`} className="codeLink">
              <button className="bookmark"><img src={bookmark} alt="bookmark"/></button>
              <span className="codeNum">{itemContent.code_id}</span>
              <span className="codeDesc">{itemContent.desc}</span>
            </a>
        )
    }
}

export default ResultItem;
