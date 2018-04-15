import React from 'react';
import axios from 'axios';

class Chapter extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: []
        }
    }

    componentWillMount(){
        const chapID = this.props.match.params.id
        axios.get(`http://localhost:5400/chapters/${chapID}`)
               .then((data) => {
                 this.setState({
                     data: data.data
                 })
               })
               .catch(function (error) {
                  console.log(error);
               })
    }

    render() {
        const codeItemEach = this.state.data.map((item, index) =>
            <li key={index}>
                <a href='#'>
                  {item['code_id']}: {item['desc']}
                </a>
            </li>
        );

        return(
            <div>
                <h1>ChapterListOfCodes:</h1>
                <ul>{codeItemEach}</ul>
            </div>
        )
    }
}
export default Chapter;
