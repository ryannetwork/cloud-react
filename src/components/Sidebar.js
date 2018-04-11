import React from 'react';
import Menu from './Menu'

class SideBar extends React.Component {
   constructor(props){
      super(props)
   }

   render() {
      return (
        <div className="rectangle-2-copy sidebar">
          <img className="carelogos1" src="images/carecloud-logo.png" alt="carecloud icd-10 codes"/>
          <Menu />

          <ul className="menu">
            <li>
              <a href="#" className="menu-item home">Home</a>
            </li>
            <li>
              <a href="#" className="menu-item bookmarks">Bookmarks</a>
            </li>
            <li>
              <a href="#" className="menu-item chapters">Chapters</a>
            </li>
            <li>
              <a href="#" className="menu-item history">History</a>
            </li>
          </ul>
          <a href="#" className="menu-item account">Account</a>
       </div>
      )
   }
}

export default SideBar;
