import React, { Component } from "react";

import { LinkedIn } from "react-linkedin-login-oauth2";

class LinkedInPage extends Component {
  state = {
    code: "",
    errorMessage: ""
  };

  handleSuccess = data => {
    console.log(data);
    this.setState({
      code: data.code,
      errorMessage: ""
    });
  };

  handleFailure = error => {
    console.log(error);
    this.setState({
      code: "",
      errorMessage: error.errorMessage
    });
  };

  render() {
    return (
      <LinkedIn
        clientId="86eaqckc5tyofg"
        onFailure={this.handleFailure}
        onSuccess={this.handleSuccess}
        redirectUri="http://localhost:4390/auth/linkedin/callback"
      />
    );
  }
}

export default LinkedInPage;
