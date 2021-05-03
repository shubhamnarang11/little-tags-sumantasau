import { GET_PRODUCTS } from './Actions';

export const getProducts = (products: any) => ({
  type: GET_PRODUCTS,
  payload: products,
});
