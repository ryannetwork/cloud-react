import React from 'react';
import Sidebar from 'react-sidebar';

class Menu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sidebarOpen: false
    }

    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }

  onSetSidebarOpen(open) {
    this.setState({sidebarOpen: open});
  }

  render() {
    var sidebarContent = <b>Sidebar content</b>;

    return (
      <Sidebar sidebar={sidebarContent}
               open={this.state.sidebarOpen}
               onSetOpen={this.onSetSidebarOpen}>
      </Sidebar>
    );
  }
};

export default Menu;
