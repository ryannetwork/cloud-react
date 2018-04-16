import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import '../css/list.css';


class ChapterItem extends React.Component {

    render() {
        const resultItem = this.props.chapters;
        const link = this.props.findChapList;
        console.log(link);

        if (!resultItem) {
            return null;
        }

        const resultItemEach = resultItem.map((item, index) =>
            <li key={index} className="list-item">
                <a href={'/icd10/chapter/' + item['chapter_number']}>
                  <span className="item-num">{item['chapter_number']}</span> {item['description']}
                </a>
            </li>
        );

        return (
            <ul className="list">{resultItemEach}</ul>
        )
    }
}
export default ChapterItem;
