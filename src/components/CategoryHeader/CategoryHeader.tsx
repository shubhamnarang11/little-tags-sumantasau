import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { CONFIG } from '../../config/Config';
import { TEST_DATA } from '../../config/StaticData';
import { CategoryHeaderModel } from '../../models/CategoryHeader.model';
import './CategoryHeader.scss';
// import * as Images from '../../assets';

const CategoryHeader: FC<CategoryHeaderModel.IProps> = () => {
  const { CATEGORIES_DATA } = TEST_DATA;
  const {
    ROUTES: { PRODUCTS },
  } = CONFIG;
  return (
    <div id='category-header-div'>
      <ul>
        {CATEGORIES_DATA.map(({ id, name }) => (
          <Link to={`${PRODUCTS}?cid=${id}&cname=${name}`} key={id}>
            <li>
              {/* <img
              src={
                (Images as any)[
                  (CATEGORIES as { [key: string]: string })[category]
                ]
              }
              alt={NO_IMAGE_FOUND}
            ></img> */}
              {name}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default CategoryHeader;
