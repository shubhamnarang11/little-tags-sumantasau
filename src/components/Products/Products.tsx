import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ProductCard } from '..';
import { CONFIG } from '../../config/Config';
import { TEST_DATA } from '../../config/StaticData';
import './Products.scss';

export default function Products() {
  const { PRODUCTS_DATA } = TEST_DATA;
  const [products, setProducts] = useState<any>([]);
  const [category, setCategory] = useState('Hi');

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
      console.log(categoryId);

      const products = PRODUCTS_DATA.filter(
        (product) => product.categoryId === categoryId
      );

      if (products && products.length > 0) {
        setProducts(products);
      }
    }
    // eslint-disable-next-line
  }, [PRODUCTS_DATA, window.location.search]);

  return (
    <div className='products-div'>
      <div className='header'>
        <p>{category}</p>
      </div>
      <div className='products'>
        {products.map((product: any) => (
          <Link to={`${PRODUCT_DETAILS}?pid=${product.id}`} key={product.id}>
            <ProductCard
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
}
