import React, { Component } from 'react';
import Button from './uiComponents/Button';
import AppLink from './uiComponents/AppLink';

let yourClientID = '52c022c1712f4f19b0f2c4da0779a4d3';

class LoginWithSpotify extends Component {
  render() {
    return (
      <Button>
        <AppLink
          href={`https://accounts.spotify.com/authorize?client_id=${yourClientID}&response_type=token&redirect_uri=http://localhost:3000/callback/`}>
          Loggin with Spotify
        </AppLink>
      </Button>
    );
  }
}

export default LoginWithSpotify;
