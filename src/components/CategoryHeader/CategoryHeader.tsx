import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { CONFIG } from '../../config/Config';
import { STATIC_DATA, TEST_DATA } from '../../config/StaticData';
import { CategoryHeaderModel } from '../../models/CategoryHeader.model';
import './CategoryHeader.scss';

const CategoryHeader: FC<CategoryHeaderModel.IProps> = () => {
  const { CATEGORIES_DATA } = TEST_DATA;
  const {
    ENGLISH: { HOME },
  } = STATIC_DATA;
  const {
    ROUTES: { PRODUCTS },
  } = CONFIG;
  
  return (
    <div id='category-header-div'>
      <ul>
        <Link to='/'>
          <li>{HOME}</li>
        </Link>
        {CATEGORIES_DATA.map(({ id, name }) => (
          <Link to={`${PRODUCTS}?cid=${id}&cname=${name}`} key={id}>
            <li>{name}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default CategoryHeader;
