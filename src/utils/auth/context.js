import React from 'react';
const AuthContext = React.createContext(null);

export const withAuthentication = Component => props => {
  return (
    <AuthContext.Consumer>
      {auth => <Component {...props} auth={auth} />}
    </AuthContext.Consumer>
  );
}

export default AuthContext;