import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Route
} from 'react-router-dom';
import SideBar from './Sidebar';
import MainSearch from './MainPage';
import Login from './Login';
import {Helmet} from "react-helmet";
import Bookmarks from './bookmarks';
import SearchResults from './SearchResults';
import Chapters from './Chapters.js';
import History from './History';


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
                  <Route exact path="/bookmarks" component={Bookmarks}/>
                  <Route exact path="/search" component={SearchResults}/>
                  <Route exact path="/chapters" component={Chapters}/>
                  <Route exact path="/history" component={History}/>
                  <Route exact path="/icd-10codes/`{params[:category]}`/`{params[:category]}`" component={SearchResults}/>
                </div>
           </BrowserRouter>
       )
   }
}

export default Page;
