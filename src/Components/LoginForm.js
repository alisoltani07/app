import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { css } from 'styled-components/macro';
import AuthUtils from '../utils/AuthUtils';

let formSchema = [
  { name: 'username', type: 'text' },
  { name: 'password', type: 'password' }
];

class LoginForm extends Component {
  state = {
    ...formSchema.reduce(
      (prevComputedState, currentSchema) => {
        let name = currentSchema.name;
        prevComputedState.data[name] = '';
        prevComputedState.error[name] = '';
        return prevComputedState;
      },
      { data: {}, error: {} }
    )
  };

  submit = e => {
    e.preventDefault();
    console.log('USER-NAME IS:', this.state.username);
    console.log('PASSWORD IS:', this.state.password);

    if (this.state.data.username === 'a' && this.state.data.password === 'a') {
      this.setState(prevState => ({
        data: {
          ...prevState.data,
          username: '',
          password: ''
        }
      }));
      AuthUtils.login('masalan-alaki-tokenam (:');
      this.props.history.push('/');
    } else {
      this.setState({
        error: {
          username: 'UserName is not correct',
          password: 'Password is not correct'
        }
      });
    }
  };
  handleChange = e => {
    let name = e.target.name;
    let value = e.target.value;
    this.setState(prevState => ({
      ...prevState,
      data: {
        ...prevState.data,
        [name]: value
      }
    }));
  };

  render() {
    return (
      <form
        css={css`
          display: flex;
          flex-direction: column;
          padding: 25px;
        `}>
        {formSchema.map(currentSchema => (
          <React.Fragment key={currentSchema.name}>
            <label htmlFor={currentSchema.name}>{currentSchema.label}</label>
            <input
              type={currentSchema.type}
              name={currentSchema.name}
              value={this.state.data[currentSchema.name]}
              onChange={this.handleChange}
            />
            {this.state.error[currentSchema.name] && (
              <p>{this.state.error[currentSchema.name]}</p>
            )}
          </React.Fragment>
        ))}
        <button type='submit' onClick={this.submit}>
          Submit info
        </button>
      </form>
    );
  }
}

export default withRouter(LoginForm);
