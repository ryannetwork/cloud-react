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

          <ul className="menu">
            <li>
              <a href="/" className="menu-item home">Home</a>
            </li>
            <li>
              <a href="/bookmarks" className="menu-item bookmarks">Bookmarks</a>
            </li>
            <li>
              <a href="#" className="menu-item chapters">Chapters</a>
            </li>
            <li>
              <a href="#" className="menu-item history">History</a>
            </li>
          </ul>
          <a href="#" onClick={() => this.props.onOpenModal()} className="menu-item account">{this.props.isLoggedIn ? "Account" : "Sign up" }</a>
       </div>
      )
   }
}

export default SideBar;
