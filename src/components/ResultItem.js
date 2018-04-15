import React from 'react';
import ReactDOM from 'react-dom';


class ResultItem extends React.Component {
  constructor(props){
    super(props);
  }

    render() {
        var itemContent = this.props.itemValue;
        var input = this.props.inputValue;
        return(
            <a href={`/icd-10/codes/${itemContent.code_id}`}>
              Code:
              {itemContent.code_id}
              Desc:
              {itemContent.desc.slice(0, itemContent.desc.indexOf(input))}
              <span style={{backgroundColor:'yellow'}}>{input}</span>
              {itemContent.desc.slice(itemContent.desc.indexOf(input) + input.length + 1)}
            </a>
        )
    }
}

export default ResultItem;
