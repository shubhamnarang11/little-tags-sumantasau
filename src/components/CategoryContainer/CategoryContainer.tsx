import React, { FC } from 'react';
import { STATIC_DATA, TEST_DATA } from '../../config/StaticData';
import { CategoryContainerModel } from '../../models/CategoryContainer.model';
import { Carousel } from '../';
import './CategoryContainer.scss';
import { Link } from 'react-router-dom';
import { CONFIG } from '../../config/Config';

const CategoryContainer: FC<CategoryContainerModel.IProps> = ({
  categoryId,
  categoryName,
}) => {
  const {
    ENGLISH: { NO_SUCH_IMAGE },
  } = STATIC_DATA;
  const {
    ROUTES: { PRODUCT_DETAILS },
  } = CONFIG;

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
        <Carousel
          show={6}
          infiniteLoop={false}
          carouselContainerClass='category-container'
        >
          {getCategoryProducts().map((product) => (
            <Link to={`${PRODUCT_DETAILS}?pid=${product.id}`} key={product.id}>
              <li>
                <img src={product.images[0]} alt={NO_SUCH_IMAGE}></img>
                <p className='product-name'>{product.name}</p>
                <p>Rs. {product.price}</p>
              </li>
            </Link>
          ))}
        </Carousel>
      </ul>
    </div>
  );
};

export default CategoryContainer;
