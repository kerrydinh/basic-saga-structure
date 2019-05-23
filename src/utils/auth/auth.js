import { UserManager } from 'oidc-client';
import authConfig from './auth-config';

/* Wrap oidc with AuthService for customize authentication */


class AuthService {
    constructor() {
        this.userManager = new UserManager(authConfig);
    }

    setCurrentAuth(user) {
        localStorage.setItem('auth', JSON.stringify(user));
    }
    
    getCurrentAuth(user) {
        localStorage.getItem('auth', JSON.stringify(user));
    }

    onSignOut() {
        localStorage.removeItem('auth');
    }

    onSignIn() {
        this.userManager.signinRedirect();
    }

}

export default AuthService;