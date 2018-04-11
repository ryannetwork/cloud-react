import React from "react";
import { render } from "react-dom";
import Modal from "react-responsive-modal";
import App from '../App';

// const styles = {
//   fontFamily: "sans-serif",
//   textAlign: "center"
// };

class Login extends React.Component {
  // state = {
  //   open: false
  // };
  //
  // onOpenModal = () => {
  //   this.setState({ open: true });
  // };
  //
  // onCloseModal = () => {
  //   this.setState({ open: false });
  // };

  render() {
    // const { open } = this.prop.state.open;
    return (
      <div>
        {/* <h2>react-responsive-modal</h2>
        <button onClick={this.onOpenModal}>Open modal</button> */}
        <Modal open={this.props.open} onClose={() => this.props.onCloseModal()} >
          <div className="modallll">
            <App />
          </div>
        </Modal>
      </div>
    );
  }
}

export default Login;
