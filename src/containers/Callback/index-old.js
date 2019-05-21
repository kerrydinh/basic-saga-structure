import React, { Component } from "react";
import { connect } from "react-redux";
import { CallbackComponent } from "redux-oidc";
import { push } from "react-router-redux";
import { withAuthentication } from '../../utils/auth';

class CallbackPage extends Component {
    constructor(props) {
        super(props);
    }
  render() {
    return (
      <CallbackComponent
        userManager={this.props.auth.userManager}
        successCallback={() => this.props.dispatch(push("/"))}
        errorCallback={error => {
          this.props.dispatch(push("/"));
          console.error(error);
        }}
        >
        <div>Redirecting...</div>
      </CallbackComponent>
    );
  }
}

export default connect()(withAuthentication(CallbackPage));
