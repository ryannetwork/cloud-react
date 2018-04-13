import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import ChapterItem from './ChapterItem';


class Chapters extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            chap: null
        };
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
            <div>
                Chapters:
                <ul>
                    <ChapterItem chapters={this.state.chap}/>
                </ul>
            </div>
        )
    }
}
export default Chapters;
