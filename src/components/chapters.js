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

    passListOfCodes(){
      const codes = this.props.list;
    }

    componentWillMount(){
        axios.get(`http://localhost:5400/chapters.json`)
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
                <ChapterItem findChapList={this.passListOfCodes} chapters={this.state.chap}/>
            </div>
        )
    }
}
export default Chapters;
