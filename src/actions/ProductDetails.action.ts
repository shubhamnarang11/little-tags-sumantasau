import { ShoppingCartModel } from '../models/ShoppingCart.model';
import {
  ADD_ITEMS_TO_CART,
  ADD_ITEM_TO_CART,
  BUY_NOW,
  RESET_BUY_NOW_FLAG,
} from './Actions';

export const addItemsToCart = (items: ShoppingCartModel.CartItem[]) => ({
  type: ADD_ITEMS_TO_CART,
  payload: items,
});

export const addItemToCart = (item: ShoppingCartModel.CartItem) => ({
  type: ADD_ITEM_TO_CART,
  payload: item,
});

export const buyItem = (item: ShoppingCartModel.CartItem) => ({
  type: BUY_NOW,
  payload: item,
});

export const resetBuyNowFlag = () => ({
  type: RESET_BUY_NOW_FLAG,
});
