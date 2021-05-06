import { GET_PRODUCTS, SET_LANGUAGE } from '../actions/Actions';

const initialState = {
  products: [],
  language: 'ENGLISH',
};

const dashboardState = (
  state = initialState,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return { ...state, products: action.payload };
    case SET_LANGUAGE:
      return { ...state, language: action.payload };
    default:
      return state;
  }
};

export default dashboardState;
