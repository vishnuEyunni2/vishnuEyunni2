import React from "react";

class ErrorBoundary extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      errorInfo: null
    }
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      hasError: error,
      errorInfo
    });
  }

  render() {

    if (this.state.hasError) {
      return (
        <>
          <p>Something went wrong!</p>
        </>
      )
    } else {
      return (
        <>
          {this.props.children}
        </>
      )
    }
  }
}

export default ErrorBoundary