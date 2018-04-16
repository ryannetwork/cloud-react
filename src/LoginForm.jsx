import React from 'react';
import PropTypes from 'prop-types';

class LoginForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: props.email,
      username: props.username,
      password: '',
    };
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.username, this.state.password);
  }

  changeUsername = (event) => {
    this.setState({ username: event.target.value });
  }

  changePassword = (event) => {
    this.setState({ password: event.target.value });
  }

  componentWillUnmount = () => {
    this.props.clearCache();
  }

  render = () => (
    <form onSubmit={this.onSubmit}>
      <div>{this.props.error}</div>
      <div>{this.state.email}</div>
      <div className="form-group">
        <label>
          Username
          <input className="form-control" placeholder="Username" value={this.state.username} onChange={this.changeUsername} required />
        </label>
      </div>
      <div className="form-group">
        <label>
          Password
          <input className="form-control" placeholder="Password" onChange={this.changePassword} type="password" required />
        </label>
      </div>
      <button className="btn btn-primary" type="submit">Sign in</button>
    </form>
  )
}

LoginForm.propTypes = {
  onSubmit: PropTypes.func,
  clearCache: PropTypes.func,
  username: PropTypes.string,
  error: PropTypes.string,
  email: PropTypes.string,
};

export default LoginForm;
