import React, { Component } from 'react';
import { Grid, Jumbotron } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import {
  PasswordReset
} from 'react-cognito';

import Dashboard from './Dashboard';
import RegisterForm from './RegisterForm';
import ChangePasswordForm from './ChangePasswordForm';
import UpdateEmailForm from './UpdateEmailForm';
import PasswordResetForm from './PasswordResetForm';
import './css/app.css';

const changePassword = () => (
    <div className="form-group">
      <ChangePasswordForm />
    </div>
);

const updateEmail = () => (
    <div className="form-group">
      <UpdateEmailForm />
    </div>
);

const passwordReset = () => (
    <PasswordReset>
      <PasswordResetForm/>
    </PasswordReset>
);

const registerForm = () => (
    <div id="register" className="form-group">
      <p>Complete this form</p>
      <RegisterForm />
    </div>
);

class App extends Component {
  render() {
    return (
      <Router className="router">
    		<div className="form-group val">
    		  <Route path="/" component={Dashboard}/>
    		  <Route path="/#register" component={registerForm}/>
    		  <Route path="/#reset" component={passwordReset}/>
    		  <Route path="/#change_password" component={changePassword}/>
    		  <Route path="/#change_email" component={updateEmail}/>
    		</div>
    	</Router>
    );
  }
}

export default App;
