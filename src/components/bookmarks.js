import React from 'react';
import ReactDOM from 'react-dom';
import SmallSearchForm from './SmallSearchForm';
import axios from 'axios';


class Bookmarks extends React.Component {

   componentWillMount(){
      const user = this.props.user.username;
      axios.get(`http://localhost:5400/favorite/${user}`)
           .then((data) => {
               console.log(data);
            })
            .catch(function (error) {
               console.log(error);
            })
   }

   render() {
       return (
         <div className="main-code-container bookmarks">
            <h1 className="icd">ICD-10 Medical Coding Reference</h1>
            <SmallSearchForm />

         </div>
       )
   }
}

export default Bookmarks;
