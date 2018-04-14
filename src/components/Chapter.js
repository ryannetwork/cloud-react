import React from 'react';
import axios from 'axios';
import {Helmet} from "react-helmet";

class Chapter extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: []
        }
    }

    componentWillMount(){
        const chapID = this.props.match.params.id
        axios.get(`http://localhost:3001/chapters/${chapID}`)
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
            <Helmet>
                <title> ICD-10-CM  </title>
                <meta name="description" content="Lookup ICD-10-CM codes in seconds. Our free tool will help you find diagnosis codes, chapters, codes by specialty and much more. Give it a try today!" />
                <meta property="og:title" content="Free ICD-10-CM Codes - Lookup any ICD-10 Diagnosis Code | CareCloud" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.carecloud.com/icd-10/" />
                <meta property="og:image" content="http://example.com/image.jpg" />
                <meta property="og:description" content="Lookup ICD-10-CM codes in seconds. Our free tool will help you find diagnosis codes, chapters, codes by specialty and much more. Give it a try today!" />

            </Helmet>
            <h1>ChapterListOfCodes:</h1>
            <ul>{codeItemEach}</ul>
        </div>
    )
}
}
export default Chapter;
