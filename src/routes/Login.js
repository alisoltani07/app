import React, { Component } from 'react';
import { css } from 'styled-components/macro';
import LoginWithSpotify from '../Components/LoginWithSpotify';
import LoginForm from '../Components/LoginForm';

class Login extends Component {
  componentDidMount() {
    if (
      this.props.location &&
      this.props.location.state &&
      this.props.location.state.from
    ) {
      localStorage.setItem(
        'referredRedirectPath',
        JSON.stringify(this.props.location.state.from)
      );
    }
  }
  render() {
    return (
      <div
        css={css`
          width: 100%;
          height: 100%;
          background-color: #cccccc;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        `}>
        <LoginForm /> <hr />
        <LoginWithSpotify />
      </div>
    );
  }
}

export default Login;
