import React from 'react';
import PropTypes from 'prop-types';

class EmailVerificationForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      error: props.error,
      verificationCode: '',
    };
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.verificationCode);
  }

  changeVerificationCode = (event) => {
    this.setState({ verificationCode: event.target.value });
  }

  render = () => (
    <form onSubmit={this.onSubmit}>
      <div>{this.props.error}</div>
      <div className="form-group">
        <label>
          Verification Code
          <input className="form-control" placeholder="code" onChange={this.changeVerificationCode} required />
        </label>
      </div>
      <button className="btn btn-primary" type="submit">Submit</button>
      <button className="btn btn-default" type="button" onClick={this.props.onCancel}>Cancel</button>
    </form>
  )
}
EmailVerificationForm.propTypes = {
  onSubmit: PropTypes.func,
  onCancel: PropTypes.func,
  error: PropTypes.string,
};

export default EmailVerificationForm;
