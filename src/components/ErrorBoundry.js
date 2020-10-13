import React, {Component} from 'react';

class ErrorBoundry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    }
  }

  componentDidCatch(error, info) {
    this.setState({
      hasError: true
    })
  }

  render() {
    const {children} = this.props
    if (this.state.hasError) {
      return <h1>Ooooops. That is not good.  :/</h1>
    }
    return children;
  }
}

export default ErrorBoundry;