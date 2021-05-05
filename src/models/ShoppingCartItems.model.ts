import { ShoppingCartModel } from './ShoppingCart.model';

export namespace ShoppingCartItemsModel {
  export interface IProps {
    cartItems: ShoppingCartModel.CartItem[];
    removeCartItem: (arg: number) => void;
  }
}
