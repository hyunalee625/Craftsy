import * as SessionApiUtil from "../util/session_api_util";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_ERRORS";

const receiveCurrentUser = payload => ({
  type: RECEIVE_CURRENT_USER,
  payload
});

const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
});

export const receiveErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const signIn = user => dispatch =>
  SessionApiUtil.signIn(user).then(
    payload => dispatch(receiveCurrentUser(payload)),
    err => dispatch(receiveErrors(err.responseJSON))
  );

export const register = user => dispatch =>
  SessionApiUtil.register(user).then(
    user => dispatch(receiveCurrentUser(user)),
    err => dispatch(receiveErrors(err.responseJSON))
  );

export const logout = callback => dispatch =>
  SessionApiUtil.logout().then(() => {
    dispatch(logoutCurrentUser());
    callback();
  });
