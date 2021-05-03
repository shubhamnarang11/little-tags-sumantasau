export namespace DeliveryAddressModel {
  export interface IProps {
    DeliveryAddress: Address[];
    loggedInUser: any;
  }

  export interface Address {
    id: number;
    name: string;
    address: string;
    state: string;
    city: string;
    pincode: string;
    mobile: string;
    isDefault: boolean;
  }
}
