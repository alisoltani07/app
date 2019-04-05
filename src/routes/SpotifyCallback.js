import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import AuthUtils from '../utils/AuthUtils';

export class SpotifyCallback extends Component {
  constructor(props) {
    super(props);
    const localStorageReferredRedirectPath = localStorage.getItem(
      'referredRedirectPath'
    );
    localStorage.removeItem('referredRedirectPath');
    this.redirectPath = localStorageReferredRedirectPath
      ? JSON.parse(localStorageReferredRedirectPath)
      : '/';
  }
  componentDidMount() {
    let props = new URLSearchParams(this.props.location.hash.slice(1));
    let accessToken = props.get('access_token');
    AuthUtils.login(accessToken);
  }
  render() {
    return <Redirect to={this.redirectPath} />;
  }
}

export default SpotifyCallback;
