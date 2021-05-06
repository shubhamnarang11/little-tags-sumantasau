import { ShoppingCartModel } from './ShoppingCart.model';

export namespace LoginModel {
  export interface IProps {
    language: 'ENGLISH' | 'SPANISH';
    onCloseLoginModalClick: () => void;
    setUser: (arg: any) => void;
    addItemsToCart: (arg: ShoppingCartModel.CartItem[]) => void;
  }
}
