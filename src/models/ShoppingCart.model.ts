export namespace ShoppingCartModel {
  export interface IProps {
    cartItems: CartItem[];
    loggedInUser: any;
    resetBuyNowFlag: () => void;
    setUser: (arg: any) => void;
    removeItemFromCart: (arg: number) => void;
    emptyCart: () => void;
  }

  export interface CartItem {
    productId: number;
    productName: string;
    quantity: number;
    totalQuantity: number;
    price: number;
    image: string;
  }
}
