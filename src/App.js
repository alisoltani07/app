import React, { Component } from 'react';
import { Switch } from 'react-router-dom';
import Navbar from './Components/Navbar';
import { renderRoutes, routesConfig } from './routes';
import ErrorHandling from './Components/ErrorHandling';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Navbar />
        <ErrorHandling>
          <Switch>{renderRoutes(routesConfig)}</Switch>
        </ErrorHandling>
      </div>
    );
  }
}

export default App;
