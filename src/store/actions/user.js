import { USER_LOGGED_IN, USER_LOGGED_OUT } from "./actionTypes";

export const login = user => ({
  type: USER_LOGGED_IN,
  payload: user
});

export const logout = () => ({
  type: USER_LOGGED_OUT
});
