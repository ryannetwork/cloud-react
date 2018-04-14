import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';


class ChapterItem extends React.Component {

    listOfChapterCodes = (event) => {
        event.preventDefault(   )
        let chNum = event.target.text.split(":")[0]
        console.log(chNum);
        const options = {
          headers: { 'content-type': 'json' },
        };

        axios.get(`http://localhost:3001/chapters/${chNum}`, options)
            .then((data) => {
              console.log('log');
              console.log(data);
            })
            .catch(function (error) {
               console.log(error);
            })
    }

    render() {
        const resultItem = this.props.chapters;

        if (!resultItem) {
            return null;
        }

        const resultItemEach = resultItem.map((item, index) =>
            <li key={index}>
                <a href="#" onClick={this.listOfChapterCodes}>
                  {item['chapter_number']}: {item['description']}
                </a>
            </li>
        );

        return (
            <ul>
                {resultItemEach}

            </ul>


        )
    }
}
export default ChapterItem;
