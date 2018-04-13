import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';


class ChapterItem extends React.Component {

    listOfChapterCodes(){
        
    }

    render() {
        const resultItem = this.props.chapters;

        if (!resultItem) {
            return null;
        }

        const resultItemEach = resultItem.map((item, index) =>
            <a key={index} onClick={this.listOfChapterCodes}>
              {item['chapter_number']}: {item['description']}
            </a>
        );

        return (
            <li>
                {resultItemEach}
            </li>
        )
    }
}
export default ChapterItem;
