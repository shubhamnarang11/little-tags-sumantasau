import { GET_PRODUCTS } from '../actions/Actions';

const initialState = {
  products: [],
};

const dashboardState = (
  state = initialState,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return { ...state, products: action.payload };

    default:
      return state;
  }
};

export default dashboardState;
