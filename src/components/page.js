import React from 'react';
import {
  BrowserRouter,
  Route
} from 'react-router-dom';
import SideBar from './Sidebar';
import MainSearch from './MainSearch';
import Login from './Login';
import {Helmet} from "react-helmet";
import Bookmarks from './bookmarks';
import SearchResults from './SearchResults';
import Chapters from './chapters';
import History from './History';
import CodesShow from './CodesShow';
import Chapter from './Chapter';
import '../css/page.css';


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
            <title>Free ICD-10-CM Codes - Lookup any ICD-10 Diagnosis Code | CareCloud</title>
            <meta name="description" content="Lookup ICD-10-CM codes in seconds. Our free tool will help you find diagnosis codes, chapters, codes by specialty and much more. Give it a try today!" />
            <meta property="og:title" content="Free ICD-10-CM Codes - Lookup any ICD-10 Diagnosis Code | CareCloud" />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://www.carecloud.com/icd-10/" />
            <meta property="og:image" content="http://example.com/image.jpg" />
            <meta property="og:description" content="Lookup ICD-10-CM codes in seconds. Our free tool will help you find diagnosis codes, chapters, codes by specialty and much more. Give it a try today!" />
          </Helmet>

          <SideBar onOpenModal={this.onOpenModal} isLoggedIn={this.props.state === "LOGGED_IN"}/>
          <Login open={this.state.modalState} onCloseModal={this.onCloseModal}/>

    		  <Route exact path="/icd10" render={(props) => <MainSearch {...props} user={this.props.user}/>}/>
          <Route exact path="/icd10/bookmarks" render={(props) => <Bookmarks {...props} user={this.props.user} />}/>
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
