import { FC } from 'react';
import { STATIC_DATA } from '../../config/StaticData';
import { ProductCardModel } from '../../models/ProductCard.model';
import './ProductCard.scss';

const ProductCard: FC<ProductCardModel.IProps> = ({ name, image, price }) => {
  const {
    ENGLISH: { NO_SUCH_IMAGE, STAR_RATING },
  } = STATIC_DATA;

  return (
    <div className='product-card-div'>
      <img src={image} alt={NO_SUCH_IMAGE}></img>
      <p>{name}</p>
      <p>Rs. {price}</p>
      <div>
        {STAR_RATING.map((rat) => (
          <i key={rat} className='fa fa-star'></i>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
