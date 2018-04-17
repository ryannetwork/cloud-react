import React from 'react';
import ReactDOM from 'react-dom';
import SmallSearchForm from './SmallSearchForm';
import axios from 'axios';


class Bookmarks extends React.Component {
  constructor(props){
    super(props)
  }

   componentWillMount(){

      axios.get(`http://localhost:5400/favorite/${this.props.user.username}`)
     .then((response) => {
       for(var key in response){
         console.log(response[key])
       }
      })
      .catch(function (error) {
         console.log("error: " + error);
      })
   }

   render() {

       return (
         <div className="main-code-container bookmarks">
            <h1 className="icd">ICD-10 Medical Coding Reference</h1>
            <SmallSearchForm />
            {this.props.user.username ? this.props.user.username : "Please log in to be able to create bookmarks"}

         </div>
       )
   }
}

export default Bookmarks;
