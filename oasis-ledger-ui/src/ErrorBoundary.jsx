import React from 'react';

// https://reactjs.org/docs/error-boundaries.html

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { err: null };
  }

  static getDerivedStateFromError(err) {
    return { err: err };
  }

  render() {
    if (this.state.err) {
      //console.log("Oh sorrow! Error: %o", this.state.err);
      return (
        <div>
          <div className="alert alert-danger">
            <strong>Oh sorrow!</strong> {this.state.err.toString()}
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;

