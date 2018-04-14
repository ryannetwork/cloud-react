import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';


class ChapterItem extends React.Component {

    render() {
        const resultItem = this.props.chapters;
        const link = this.props.findChapList;
        console.log(link);

        if (!resultItem) {
            return null;
        }

        const resultItemEach = resultItem.map((item, index) =>
            <li key={index}>
                <a href={'/icd10/chapter/' + item['chapter_number']}>
                  {item['chapter_number']}: {item['description']}
                </a>
            </li>
        );

        return (
            <ul>{resultItemEach}</ul>
        )
    }
}
export default ChapterItem;
