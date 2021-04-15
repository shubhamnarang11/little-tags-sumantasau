import { FC } from 'react';
import { STATIC_DATA, TEST_DATA } from '../../config/StaticData';
import { CategoryContainerModel } from '../../models/CategoryContainer.model';
import { Carousel } from '../';
import './CategoryContainer.scss';

const CategoryContainer: FC<CategoryContainerModel.IProps> = ({
  categoryId,
  categoryName,
}) => {
  const {
    ENGLISH: { NO_SUCH_IMAGE },
  } = STATIC_DATA;
  const getCategoryProducts = () => {
    const { PRODUCTS_DATA } = TEST_DATA;
    return PRODUCTS_DATA.filter((data) => data.categoryId === categoryId);
  };

  return (
    <div className='category-container-div'>
      <div className='header'>
        <p>{categoryName}</p>
      </div>
      <span className='bottom-border'></span>
      <ul className='products'>
        <Carousel show={6} infiniteLoop={false}>
          {getCategoryProducts().map((product) => (
            <li key={product.id}>
              <img src={product.image} alt={NO_SUCH_IMAGE}></img>
              <p className='product-name'>{product.name}</p>
              <p>Rs. {product.price}</p>
            </li>
          ))}
        </Carousel>
      </ul>
    </div>
  );
};

export default CategoryContainer;
