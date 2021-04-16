import { FC } from 'react';
import { STATIC_DATA } from '../../config/StaticData';
import { ProductCardModel } from '../../models/ProductCard.model';
import './ProductCard.scss';

const ProductCard: FC<ProductCardModel.IProps> = ({
  name,
  image,
  rating,
  price,
}) => {
  const {
    ENGLISH: { NO_SUCH_IMAGE, STAR_RATING },
  } = STATIC_DATA;

  return (
    <div className='product-card-div'>
      <img src={image} alt={NO_SUCH_IMAGE}></img>
      <p>{name}</p>
      <p>Rs. {price}</p>
      <div>
        {STAR_RATING.map((rat) =>
          rat < rating ? (
            <i key={rat} className='fa fa-star'></i>
          ) : rat - rating > 0 ? (
            <i key={rat} className='fa fa-star-half-o'></i>
          ) : (
            <i key={rat} className='fa fa-star-o'></i>
          )
        )}
      </div>
    </div>
  );
};

export default ProductCard;
