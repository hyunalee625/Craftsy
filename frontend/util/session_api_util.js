export const register = user =>
  $.ajax({
    method: "post",
    url: "api/users",
    data: { user }
  });

export const signIn = user =>
  $.ajax({
    method: "post",
    url: "api/session",
    data: { user }
  });

export const logout = () =>
  $.ajax({
    method: "delete",
    url: "api/session"
  });
