import * as SessionApiUtil from "../util/session_api_util";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_ERRORS";

const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
});

const receiveErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const signIn = user => dispatch =>
  SessionApiUtil.signin(user).then(
    user => dispatch(receiveCurrentUser(user)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  );

export const register = user => dispatch =>
  SessionApiUtil.register(user).then(
    user => dispatch(receiveCurrentUser(user)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  );

export const logout = () => dispatch =>
  SessionApiUtil.logout().then(() => dispatch(logoutCurrentUser()));
