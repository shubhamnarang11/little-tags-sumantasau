import { ADD_DELIVERY_ADDRESS } from './Actions';

export const AddDeliveryAddress = (addressData: any) => ({
  type: ADD_DELIVERY_ADDRESS,
  payload: addressData,
});
