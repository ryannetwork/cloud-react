import React from 'react';
import ReactDOM from 'react-dom';
import SmallSearchForm from './SmallSearchForm';
import axios from 'axios';
import ResultItem from './ResultItem';
import '../css/list.css';


class Bookmarks extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        data: []
    }
  }

   componentWillMount(){

      axios.get(`http://localhost:5400/favorite/${this.props.user.username}`)
     .then((data) => {
         this.setState({
             data: data.data
         })
      })
      .catch(function (error) {
         console.log("error: " + error);
      })
   }

   render() {

     const codeItemEach = this.state.data.map((item, index) =>
         <li key={index} className="list-item">
             <ResultItem itemValue={item} key={index}/>
         </li>
     );

       return (
         <div className="main-code-container bookmarks">
            <h1 className="icd">ICD-10 Medical Coding Reference</h1>
            <SmallSearchForm />
            {this.props.user.username ? <ul className="list">{codeItemEach}</ul> : "Please log in to be able to create bookmarks"}

         </div>
       )
   }
}

export default Bookmarks;
