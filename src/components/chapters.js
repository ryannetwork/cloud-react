import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import ChapterItem from './ChapterItem';
import {Helmet} from "react-helmet";
import SearchForm from "./SearchForm";
import '../css/chapters.css';
import SmallSearchForm from './SmallSearchForm';

class Chapters extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            chap: null
        };
    }

    passListOfCodes(){
      const codes = this.props.list;
    }

    componentWillMount(){
        axios.get(`http://localhost:3001/chapters.json`)
            .then((data) => {
              const chaptie = data.data
              console.log("COMPONENT WILL Mount messages : ", chaptie);
              this.setState({
                  chap: [ ...chaptie ]
              })
            })
            .catch(function (error) {
               console.log(error);
            })
    }

    render() {

        return(
            <div className="main-code-container">
              <Helmet>
                <title> ICD-10-CM Chapters List - Lookup any ICD-10 Code by Chapter"</title>
                <meta name="description" content="" />
                <meta property="og:title" content="ICD-10-CM Chapters List - Lookup any ICD-10 Code by Chapter" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.carecloud.com/icd-10/chapters/" />
                <meta property="og:image" content="http://example.com/image.jpg" />
                <meta property="og:description" content="In 2018, ICD-10-CM contains 22 chapters. Easily access all the chapters, code ranges and every ICD-10 code that falls within those ranges.
" />
              </Helmet>
                <SmallSearchForm />
                Chapters:
                <ChapterItem findChapList={this.passListOfCodes} chapters={this.state.chap}/>
            </div>
        )
    }
}
export default Chapters;
