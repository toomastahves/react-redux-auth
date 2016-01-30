import { LOGOUT_SUCCESS } from '../constants/authConstants';

export const logout = () => {
  localStorage.removeItem('jwt');
  return {
    type: LOGOUT_SUCCESS
  };
};
