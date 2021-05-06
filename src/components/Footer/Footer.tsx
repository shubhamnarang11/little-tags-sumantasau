import './Footer.scss';
import { STATIC_DATA, TEST_DATA } from '../../config/StaticData';
import { Link } from 'react-router-dom';
import { CONFIG } from '../../config/Config';
import { FC } from 'react';
import { connect } from 'react-redux';

const Footer: FC<{ language: 'ENGLISH' | 'SPANISH' }> = ({ language }) => {
  const {
    [language]: {
      Footer: {
        FOOTER_CONTACT_INFO_HEADING,
        FOOTER_CONTACT_INFO,
        FOOTER_CATEGORY_HEADING,
        FOOTER_SUBSCRIPTION_HEADING,
        FOOTER_SUBSCRIPTION_INFO,
      },
    },
  } = STATIC_DATA;

  const { CATEGORIES_DATA } = TEST_DATA;

  const {
    ROUTES: { PRODUCTS },
  } = CONFIG;

  return (
    <div id='footer-container'>
      <div className='left'>
        <h2>{FOOTER_CONTACT_INFO_HEADING}</h2>
        <p>{FOOTER_CONTACT_INFO}</p>
      </div>
      <div className='middle'>
        <h2>{FOOTER_CATEGORY_HEADING}</h2>
        <ul>
          {CATEGORIES_DATA.map((category) => (
            <Link
              to={`${PRODUCTS}?cid=${category.id}&cname=${category.name}`}
              key={category.id}
            >
              <li key={category.id}>{category.name} </li>
            </Link>
          ))}
        </ul>
      </div>
      <div className='right'>
        <h2>{FOOTER_SUBSCRIPTION_HEADING}</h2>
        <span>
          <input type='text' className='subscriptio-textbox' />{' '}
        </span>
        <span>
          <input
            type='button'
            value='Subscribe'
            className='subscription-button'
          />
        </span>
        <p>{FOOTER_SUBSCRIPTION_INFO}</p>
      </div>
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  language: state.dashboardState.language,
});
export default connect(mapStateToProps)(Footer);
