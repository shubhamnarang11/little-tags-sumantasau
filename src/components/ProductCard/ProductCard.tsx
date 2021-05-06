import { FC, useContext, useEffect, useState } from 'react';
import { STATIC_DATA } from '../../config/StaticData';
import { ProductCardModel } from '../../models/ProductCard.model';
import FirebaseContext from '../Firebase/Context';
import './ProductCard.scss';

const ProductCard: FC<ProductCardModel.IProps> = ({
  id,
  name,
  image,
  rating,
  price,
}) => {
  const {
    ENGLISH: { NO_IMAGE_FOUND, STAR_RATING },
  } = STATIC_DATA;
  const firebase = useContext(FirebaseContext);
  const [productRating, setProductRating] = useState(5);

  useEffect(() => {
    firebase.db.ref(`ratings/${id}`).once('value', (snap: any) => {
      const ratings = snap.val();
      if (ratings) {
        setProductRating(
          ratings.reduce((a: number, b: number) => a + b, 0) / ratings.length
        );
      }
    });
  // eslint-disable-next-line
  }, []);
  
  return (
    <div className='product-card-div'>
      <img src={image} alt={NO_IMAGE_FOUND}></img>
      <p>{name}</p>
      <p className='price'>Rs. {price}</p>
      <div>
        {STAR_RATING.map((rat) =>
          rat <= productRating ? (
            <i key={rat} className='fa fa-star'></i>
          ) : rat - productRating > 0 && rat - productRating < 1? (
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
