import React from 'react';
// import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Route
} from 'react-router-dom';
import SideBar from './Sidebar';
import axios from 'axios';
import MainSearch from './MainSearch';
import Login from './Login';
import {Helmet} from "react-helmet";
import Bookmarks from './bookmarks';
import SearchResults from './SearchResults';
import Chapters from './Chapters';
import History from './History';
import CodesShow from './CodesShow';
import Chapter from './Chapter';


class Page extends React.Component {
   constructor(props){
      super(props);
      this.state = {
        displayModal: false,
        modalState: false
      };
      this.onOpenModal = this.onOpenModal.bind(this);
      this.onCloseModal = this.onCloseModal.bind(this);
   }

   onOpenModal = () => {
     this.setState({
        displayModal: true,
        modalState: true
     });
   };

   onCloseModal = () => {
     this.setState({
        displayModal: false,
        modalState: false
     });
   };

   // listOfChapterCodes = (event) => {
   //     event.preventDefault(   );
   //     console.log(event);
   //     let chNum = event.target.text.split(":")[0]
   //     console.log(chNum);
   //     const options = {
   //       headers: { 'content-type': 'json' },
   //     };
   //
   //     axios.get(`http://localhost:3001/chapters/${chNum}`, options)
   //         .then((data) => {
   //           console.log(data);
   //         })
   //         .catch(function (error) {
   //            console.log(error);
   //         })
   // }

   render() {
       return (
          <BrowserRouter>
              <div className="main-container rectangle-4">
                  <Helmet>
                      <title>New tags</title>
                      <meta name="description" content="my tags Helmet application" />
                  </Helmet>

                  <SideBar onOpenModal={this.onOpenModal} isLoggedIn={this.props.state === "LOGGED_IN"}/>
                  <Login open={this.state.modalState} onCloseModal={this.onCloseModal}/>

            		  <Route exact path="/icd10" component={MainSearch}/>
                  <Route exact path="/icd10/bookmarks" component={Bookmarks}/>
                  <Route exact path="/icd10/search" component={SearchResults}/>
                  <Route exact path="/icd10/chapters" component={() => (<Chapters list={this.listOfChapterCodes} />)}/>
                  <Route exact path="/icd10/chapter/:id" render={(props)=> (<Chapter {...props} />)}/>
                  <Route exact path="/icd10/history" component={History}/>
                  <Route exact path="/icd-10codes/`{params[:category]}`/`{params[:category]}`" component={SearchResults}/>
                  <Route exact path="/icd-10/codes/:code_id" render={(props) => (< CodesShow {...props}/>)}/>
                </div>
           </BrowserRouter>
       )
   }
}

export default Page;
