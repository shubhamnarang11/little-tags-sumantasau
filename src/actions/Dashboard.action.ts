import { GET_PRODUCTS, SET_LANGUAGE } from './Actions';

export const getProducts = (products: any) => ({
  type: GET_PRODUCTS,
  payload: products,
});

export const setLanguage = (language: string) => ({
  type: SET_LANGUAGE,
  payload: language,
});
