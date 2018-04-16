import React from 'react';
import axios from 'axios';
import '../css/list.css';
import SmallSearchForm from './SmallSearchForm';
import ResultItem from './ResultItem';

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
            <li key={index} className="list-item">
                <ResultItem itemValue={item} key={index}/>
            </li>
        );

        return(
            <div className="main-code-container chapter">
                <h1 className="icd">ICD-10 Medical Coding Reference</h1>
                <SmallSearchForm />
                <ul className="list">{codeItemEach}</ul>
            </div>
        )
    }
}
export default Chapter;
