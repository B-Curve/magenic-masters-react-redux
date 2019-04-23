import * as React from 'react';

interface LoginFormState {
  email: string;
  password: string;
}

class LoginForm extends React.Component <any, LoginFormState> {
  state: LoginFormState = {
    email: '',
    password: '',
  };

  render() {
    return (
      <React.Fragment>
        <label htmlFor="email-label">
          Email
          <input
            id="email-label"
            type="text"
            value={this.state.email}
            onChange={(e: any) => this.setState({ email: e.target.value })}
          />
        </label>
        <label htmlFor="password-label">
          Password
          <input
            id="password-label"
            type="password"
            value={this.state.password}
            onChange={(e: any) => this.setState({ password: e.target.value })}
          />
        </label>
      </React.Fragment>
    );
  }
}

export default LoginForm;
