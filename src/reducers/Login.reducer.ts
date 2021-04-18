import { SHOW_LOGIN_MODAL, HIDE_LOGIN_MODAL } from '../actions/Actions';

const initialState = { 
  isLoginModalOpen: false,
};

const loginState = (
  state = initialState,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case SHOW_LOGIN_MODAL:
      return {
        ...state,       
        isLoginModalOpen: true,
      };
      case HIDE_LOGIN_MODAL:
        return {
          ...state,       
          isLoginModalOpen: false,
        };
    default:
      return state;
  }
};

export default loginState;
