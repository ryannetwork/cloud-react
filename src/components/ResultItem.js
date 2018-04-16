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
        var input = this.props.inputValue;
        return(
            <a href={`/icd-10/codes/${itemContent.code_id}`} className="codeLink">
              <button className="bookmark"><img src={bookmark} alt="bookmark"/></button>
              <span className="codeNum">{itemContent.code_id}</span>
              <span className="codeDesc">
                {itemContent.desc.slice(0, itemContent.desc.indexOf(input))}
                <span style={{'display': 'inline-block', backgroundColor:'#00C9F0', 'borderRadius': '6px', 'color': '#002A5E', 'fontFamily': 'ProximaNova-Regular','padding': '0px 5px' }}>{input}</span>
                {itemContent.desc.slice(itemContent.desc.indexOf(input) + input.length + 1)}
             </span>
            </a>
        )
    }
}

export default ResultItem;
