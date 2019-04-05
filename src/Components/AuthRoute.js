import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthUtils from '../utils/AuthUtils';

function AuthRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        AuthUtils.isUserloggedIn() ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
}

export default AuthRoute;
