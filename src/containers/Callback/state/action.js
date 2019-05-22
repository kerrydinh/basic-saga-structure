export const CALLBACK_ACTION_TYPE = {
    SET_AUTH_USER: "SET_AUTH_USER",
    SET_AUTH_USER_SUCCESSFULLY: "SET_AUTH_USER_SUCCESSFULLY",
    SET_AUTH_USER_FAILED: "SET_AUTH_USER_FAILED"
}

export const setAuthUser = (authToken) => ({
    type: CALLBACK_ACTION_TYPE.SET_AUTH_USER,
    authToken: authToken  
});

export const getAuthUserSuccessfully = user => ({
    type: CALLBACK_ACTION_TYPE.SET_AUTH_USER_SUCCESSFULLY,
    payload: user
});
  
  