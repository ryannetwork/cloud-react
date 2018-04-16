import React from 'react';
import ReactDOM from 'react-dom';
import SmallSearchForm from './SmallSearchForm';


class Bookmarks extends React.Component {
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
