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

const changePassword = () => (
    <div>
      <ChangePasswordForm />
      <Link to="/">Home</Link>
    </div>
);

const updateEmail = () => (
    <div>
      <UpdateEmailForm />
      <Link to="/icd10">Home</Link>
    </div>
);

const passwordReset = () => (
  <PasswordReset>
      <PasswordResetForm/>
    </PasswordReset>
);

const registerForm = () => (
    <div>
      <p>Complete this form</p>
      <RegisterForm />
      <Link to="/icd10">Home</Link>
    </div>
);

// const styles ={
//   fontFamily: 'ProximaNova-Light'
// }


class App extends Component {
  render() {
    return (
      <Router>
    		<div>
    		  <Route exact path="/icd10" component={Dashboard}/>
    		  <Route exact path="/icd10/register" component={registerForm}/>
    		  <Route exact path="/icd10/reset" component={passwordReset}/>
    		  <Route exact path="/icd10/change_password" component={changePassword}/>
    		  <Route exact path="/icd10/change_email" component={updateEmail}/>
    		</div>
    	</Router>
    );
  }
}

export default App;
