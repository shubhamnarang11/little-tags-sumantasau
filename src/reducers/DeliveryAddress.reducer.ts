import { ADD_DELIVERY_ADDRESS } from '../actions/Actions';

const initialState = {
    DeliveryAddress :[],
};

const deliveryAddressState = (
  state = initialState,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case ADD_DELIVERY_ADDRESS:
      return { ...state, DeliveryAddress: [...state.DeliveryAddress, action.payload] };
    default:
      return state;
  }
};

export default deliveryAddressState;
