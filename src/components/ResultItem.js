import React from 'react';
import ReactDOM from 'react-dom';


class ResultItem extends React.Component {
  constructor(props){
    super(props);
  }

    render() {
        var itemContent = this.props.itemValue;
        return(
            <a href={`/icd-10/codes/${itemContent.code_id}`}>
              Code:
              {itemContent.code_id}
              Desc:
              {itemContent.desc}
            </a>
        )
    }
}

export default ResultItem;
