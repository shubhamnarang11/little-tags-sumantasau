export namespace ProductDetailsModel {
  export interface IProps {
    addItemsToCart: (arg: CartItem) => void;
    buyItem: (arg: CartItem) => void;
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
