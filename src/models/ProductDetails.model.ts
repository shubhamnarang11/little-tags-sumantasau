import { ShoppingCartModel } from './ShoppingCart.model';

export namespace ProductDetailsModel {
  export interface IProps {
    addItemsToCart: (arg: ShoppingCartModel.CartItem) => void;
    buyItem: (arg: ShoppingCartModel.CartItem) => void;
  }
}
