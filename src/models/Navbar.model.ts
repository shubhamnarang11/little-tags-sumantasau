export namespace NavbarModel {
  export interface IProps {
    products: any;
    cartSize: number;
    loggedInUser: any;
    showSideMenu: (arg: boolean) => void;
  }
}
