export const getAuthenticationStatus = store => store.callback.isAuthenticated;
export const getAccessToken = store => store.callback.authToken.access_token;
export const getUserInfo = store => store.callback.authToken.profile;