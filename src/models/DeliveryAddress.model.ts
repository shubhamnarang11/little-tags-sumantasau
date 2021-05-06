export namespace DeliveryAddressModel {
  export interface IProps {
    language: 'ENGLISH' | 'SPANISH';
    userAddresses: any;
    setAddress: (arg: string) => void;
  }
}
