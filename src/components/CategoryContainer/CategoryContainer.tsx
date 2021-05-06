import React, { FC } from 'react';
import { STATIC_DATA } from '../../config/StaticData';
import { CategoryContainerModel } from '../../models/CategoryContainer.model';
import { Carousel } from '../';
import './CategoryContainer.scss';
import { Link } from 'react-router-dom';
import { CONFIG } from '../../config/Config';
import { connect } from 'react-redux';

const CategoryContainer: FC<CategoryContainerModel.IProps> = ({
  language,
  categoryId,
  categoryName,
  products,
}) => {
  const {
    [language]: { NO_IMAGE_FOUND },
  } = STATIC_DATA;
  const {
    ROUTES: { PRODUCT_DETAILS },
  } = CONFIG;

  const getCategoryProducts = (noOfItems: number) => {
    return products
      .filter((data: any) => data.categoryId === categoryId)
      .slice(0, noOfItems);
  };

  return (
    <>
      <div className='category-container-web-div'>
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
            {getCategoryProducts(8).map((product: any) => (
              <Link
                to={`${PRODUCT_DETAILS}?pid=${product.id}`}
                key={product.id}
              >
                <li>
                  <img src={product.images[0]} alt={NO_IMAGE_FOUND}></img>
                  <p className='product-name'>{product.name}</p>
                  <p className='price'>Rs. {product.price}</p>
                </li>
              </Link>
            ))}
          </Carousel>
        </ul>
      </div>
      <div className='category-container-mobile-div'>
        <div className='header'>
          <p>{categoryName}</p>
        </div>
        <span className='bottom-border'></span>
        <ul className='products'>
          {getCategoryProducts(4).map((product: any) => (
            <Link to={`${PRODUCT_DETAILS}?pid=${product.id}`} key={product.id}>
              <li>
                <img src={product.images[0]} alt={NO_IMAGE_FOUND}></img>
                <p className='product-name'>{product.name}</p>
                <p className='price'>Rs. {product.price}</p>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </>
  );
};

const mapStateToProps = (state: any) => ({
  products: state.dashboardState.products,
  language: state.dashboardState.language
});

export default connect(mapStateToProps)(CategoryContainer);
