import { ShoppingCartModel } from './ShoppingCart.model';

export namespace NavbarModel {
  export interface IProps {
    language: 'ENGLISH' | 'SPANISH';
    products: any;
    cartSize: number;
    loggedInUser: any;
    showSideMenu: (arg: boolean) => void;
    setUser: (arg: any) => void;
    addItemsToCart: (arg: ShoppingCartModel.CartItem[]) => void;
    setLanguage: (arg: string) => void;
  }
}
