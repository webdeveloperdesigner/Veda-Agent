import React, { Component } from 'react';
import ServerError from '../pages/ServerError';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <ServerError />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
