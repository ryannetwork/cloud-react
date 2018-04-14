import React from 'react';
import ReactDOM from 'react-dom';


class ResultItem extends React.Component {

    render() {
        var itemContent = this.props.itemValue;

        return(
            <a href="#"><span>Code:</span>{itemContent.code_id}<span>Desc:</span><span>{itemContent.desc}</span></a>
        )
    }
}

export default ResultItem;
