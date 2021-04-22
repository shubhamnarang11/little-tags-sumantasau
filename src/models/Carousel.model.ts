export namespace CarouselModel {
  export interface IProps {
    children: any;
    show: number;
    infiniteLoop: boolean;
    carouselContainerClass: string;
    selectedImage?: number;
    updateCurrentIndex?: (arg: number) => void;
  }
}
