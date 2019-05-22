import React, { Component, useEffect  } from "react";
import { withAuthentication } from '../../utils/auth';
import { setAuthUser } from "./state/action";
import { connect } from "react-redux";

const onRedirectSuccess = function(props, user) {
  props.setAuthUser(user);
  props.auth.setCurrentAuth(user);
  props.history.push('/');
}

const onRedirectError = function(error) {
}

function CallbackComponent(props) {
    useEffect(() => {
        if (/access_token|id_token|error/.test(props.location.hash)) {
            props.auth.userManager.signinRedirectCallback()
            .then((user) => 
              onRedirectSuccess(props, user)
            ).catch((error) => 
              onRedirectError(error)
            );
        }
    });

    return (
      <div>
        Redirecting...
      </div>
    );
}


function mapDispatchToProps(dispatch) {
  return {
    setAuthUser: user => dispatch(setAuthUser(user))
  };
}

export default connect(
  null,
  mapDispatchToProps
)(withAuthentication(CallbackComponent));
