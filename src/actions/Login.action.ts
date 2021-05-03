import { SET_LOGGED_IN_USER } from './Actions';

export const setUser = (userData: any) => ({
  type: SET_LOGGED_IN_USER,
  payload: userData,
});
