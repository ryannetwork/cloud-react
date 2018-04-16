import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { registerUser } from 'react-cognito';

class RegisterForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      error: '',
      username: '',
      password: '',
      email: '',
    };
  }

  static propTypes = {
    history: PropTypes.object.isRequired,
  }

  onSubmit = (event) => {
    const { store } = this.context;
    const state = store.getState();
    const userPool = state.cognito.userPool;
    const config = state.cognito.config;
    event.preventDefault();
    registerUser(userPool, config, this.state.username, this.state.password, {
      email: this.state.email,
    }).then(
      (action) => {
        store.dispatch(action);
        this.props.history.push('/');
      },
      error => this.setState({ error }));
  }

  changeUsername = (event) => {
    this.setState({ username: event.target.value });
  }

  changePassword = (event) => {
    this.setState({ password: event.target.value });
  }

  changeEmail = (event) => {
    this.setState({ email: event.target.value });
  }

  render = () => (
    <form onSubmit={this.onSubmit}>
      <div>{this.state.error}</div>
      <div className="form-group">
          <label>Username
          <input className="form-control" placeholder="username" type="email" onChange={this.changeUsername} required />
          </label>
      </div>
      <div className="form-group">
      <label>
        Password
        <input className="form-control" placeholder="password" type="password" onChange={this.changePassword} required />
      </label>
      </div>
      <div className="form-group">
      <label>
        Email Address
        <input className="form-control" placeholder="email" type="email" onChange={this.changeEmail} required />
      </label>
      </div>
      <button className="btn btn-primary" type="submit">Register</button>
    </form>
  )
}
RegisterForm.contextTypes = {
  store: PropTypes.object,
};

export default withRouter(RegisterForm);
