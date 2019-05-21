import React, { Component, useEffect  } from "react";
import { withAuthentication } from '../../utils/auth';
import { thisExpression } from "@babel/types";


const onRedirectSuccess = function(props, user) {
  props.auth.setAuthentication(user);
  props.history.push('/dashboard')
}

const onRedirectError = function(error) {
}

function CallbackComponent(props) {
    useEffect(() => {
        /*Check the location hash that includes the auth user callbacl */
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

export default withAuthentication(CallbackComponent);