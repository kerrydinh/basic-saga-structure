import { UserManager } from 'oidc-client';
import authConfig from './auth-config';

/* Wrap oidc with AuthService for customize authentication */
class AuthService {
    constructor() {
        this.userManager = new UserManager(authConfig);
        this.isAuthenticated = false;
        this.text = 'no update';
    }

    setAuthentication(user) {
        this.isAuthenticated = true;
        this.text = 'updated';
        localStorage.setItem('auth', user);
    }
    onSignIn() {
        this.userManager.signinRedirect();
    }

}

export default AuthService;