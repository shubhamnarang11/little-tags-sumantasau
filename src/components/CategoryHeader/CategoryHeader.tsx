import React, { FC } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { CONFIG } from '../../config/Config';
import { STATIC_DATA, TEST_DATA } from '../../config/StaticData';
import { CategoryHeaderModel } from '../../models/CategoryHeader.model';
import './CategoryHeader.scss';

const CategoryHeader: FC<CategoryHeaderModel.IProps> = ({ language }) => {
  const { CATEGORIES_DATA } = TEST_DATA;
  const {
    [language]: { HOME },
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

const mapStateToProps = (state: any) => ({
  language: state.dashboardState.language,
});

export default connect(mapStateToProps)(CategoryHeader);
