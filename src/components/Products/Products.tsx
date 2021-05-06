import React, { FC, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { ProductCard } from '..';
import { CONFIG } from '../../config/Config';
import { ProductsModel } from '../../models/Products.model';
import './Products.scss';

const Products: FC<ProductsModel.IProps> = ({ allProducts }) => {
  const [products, setProducts] = useState<any>([]);
  const [category, setCategory] = useState('');

  const {
    ROUTES: { PRODUCT_DETAILS },
  } = CONFIG;

  useEffect(() => {
    const categoryId = parseInt(
      window.location.search.substring(1).split('&')[0].split('=')[1]
    );
    const categoryName = decodeURIComponent(
      window.location.search.substring(1).split('&')[1].split('=')[1]
    );

    if (categoryName) {
      setCategory(categoryName);
    }
    if (categoryId && categoryId !== -1) {
      const products = allProducts.filter(
        (product: any) => product.categoryId === categoryId
      );

      if (products && products.length > 0) {
        setProducts(products);
      }
    }
    // eslint-disable-next-line
  }, [allProducts, window.location.search]);

  return (
    <div className='products-div'>
      <div className='header'>
        <p>{category}</p>
      </div>
      <div className='products'>
        {products.map((product: any) => (
          <Link to={`${PRODUCT_DETAILS}?pid=${product.id}`} key={product.id}>
            <ProductCard
              id={product.id}
              name={product.name}
              image={product.images[0]}
              price={product.price}
              rating={product.rating}
            ></ProductCard>
          </Link>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  allProducts: state.dashboardState.products,
});

export default connect(mapStateToProps)(Products);
