import React from 'react';
import ReactDOM from 'react-dom';
import SideBar from './Sidebar';
import MainSearch from './MainPage';
import Login from './Login';
import {Helmet} from "react-helmet";


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
          <div className="main-container rectangle-4">

             <Helmet>
                 <title>New tags</title>
                 <meta name="description" content="my tags Helmet application" />
             </Helmet>

             <SideBar onOpenModal={this.onOpenModal} isLoggedIn={this.props.state === "LOGGED_IN"}/>
             <MainSearch />
             <Login open={this.state.modalState} onCloseModal={this.onCloseModal}/>
          </div>
       )
   }
}

export default Page;
