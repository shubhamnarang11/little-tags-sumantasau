import { SET_LOGGED_IN_USER } from '../actions/Actions';

const initialState = {
  loggedInUser: {},
};

const loginState = (
  state = initialState,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case SET_LOGGED_IN_USER:
      return { ...state, loggedInUser: action.payload };
    default:
      return state;
  }
};

export default loginState;
