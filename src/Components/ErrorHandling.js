import React, { Component } from 'react';

export class ErrorThrowingComponents extends Component {
  render() {
    throw new Error(' *** *** *** ERROR HAPPEND');
    return <div />;
  }
}

class ErrorHandling extends Component {
  state = {
    hasError: false
  };
  componentDidCatch(err) {
    console.log(' ### ### ### ', err);
  }
  static getDerivedStateFromError(err) {
    return {
      hasError: true
    };
  }
  render() {
    if (!this.state.hasError) {
      return this.props.children;
    } else {
      return <h2>Oops! has Error</h2>;
    }
  }
}

export default ErrorHandling;
