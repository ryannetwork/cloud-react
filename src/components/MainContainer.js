import React from 'react';
import ReactDOM from 'react-dom';
import SideBar from './Sidebar'
import MainSearch from './MainPage'

class PageContainer extends React.Component {
   constructor(props){
      super(props)
   }

   render() {
       return (
          <div className="main-container rectangle-4">
             <SideBar />
             <MainSearch />
          </div>
       )
   }
}

export default PageContainer;
