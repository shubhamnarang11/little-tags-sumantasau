import { ProductDetailsModel } from '../models/ProductDetails.model';
import { ADD_TO_CART, BUY_NOW } from './Actions';

export const addItemsToCart = (item: ProductDetailsModel.CartItem) => ({
  type: ADD_TO_CART,
  payload: item,
});

export const buyItem = (item: ProductDetailsModel.CartItem) => ({
  type: BUY_NOW,
  payload: item,
});
