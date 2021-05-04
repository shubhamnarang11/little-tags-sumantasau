import {
  ADD_ITEMS_TO_CART,
  ADD_ITEM_TO_CART,
  BUY_NOW,
  EMPTY_CART,
  REMOVE_CART_ITEM,
  RESET_BUY_NOW_FLAG,
} from '../actions/Actions';

const initialState = {
  cartItems: [],
  isBuyItem: false,
};

const shoppingCartState = (
  state = initialState,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case ADD_ITEM_TO_CART:
      return { ...state, cartItems: [...state.cartItems, action.payload] };
    case ADD_ITEMS_TO_CART:
      return { ...state, cartItems: [...state.cartItems, ...action.payload] };
    case BUY_NOW:
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
        isBuyItem: true,
      };
    case RESET_BUY_NOW_FLAG:
      return { ...state, isBuyItem: false };
    case REMOVE_CART_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item: any) => item.productId !== action.payload
        ),
      };
    case EMPTY_CART:
      return { ...state, cartItems: [] };
    default:
      return state;
  }
};

export default shoppingCartState;
