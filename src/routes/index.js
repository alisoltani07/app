import React from 'react';
import { Route } from 'react-router-dom';
import AuthRoute from '../Components/AuthRoute';
import Login from './Login';
import SpotifyCallback from './SpotifyCallback';
import Categories from './Categories';
import Category from './category';
import dashboardConfig from './Dashboard/index';
import HomePage from './HomePage';
import NotFound from './NotFound';

export const routesConfig = [
  {
    path: '/',
    exact: true,
    component: HomePage
  },
  {
    path: '/categories/:categoryId',
    component: Category,
    auth: true
  },
  {
    path: '/categories',
    component: Categories,
    auth: true
  },
  dashboardConfig,
  {
    path: '/callback',
    component: SpotifyCallback
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/',
    component: NotFound
  }
];

export const renderRoutes = routes => {
  return routes.map(route => {
    return route.auth ? (
      <AuthRoute {...route} />
    ) : (
      <Route
        {...route}
        Name='ali'

        // component={undefined}
        // render={props => {
        //   return <route.component {...props} routes={route.routes} />;
        // }}
      />
    );
  });
};
