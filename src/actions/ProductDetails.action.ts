import { ShoppingCartModel } from '../models/ShoppingCart.model';
import { ADD_TO_CART, BUY_NOW, RESET_BUY_NOW_FLAG } from './Actions';

export const addItemsToCart = (item: ShoppingCartModel.CartItem) => ({
  type: ADD_TO_CART,
  payload: item,
});

export const buyItem = (item: ShoppingCartModel.CartItem) => ({
  type: BUY_NOW,
  payload: item,
});

export const resetBuyNowFlag = () => ({
  type: RESET_BUY_NOW_FLAG,
});
