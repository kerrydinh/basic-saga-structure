import React from 'react';

const AuthContext = React.createContext(null);

export const withAuthentication = Component => props => (
    <AuthContext.Consumer>
      {auth => <Component {...props} auth={auth} />}
    </AuthContext.Consumer>
);

export default AuthContext;