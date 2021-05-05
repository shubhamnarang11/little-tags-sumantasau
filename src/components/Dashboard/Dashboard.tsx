import { CategoryContainer } from '..';
import { TEST_DATA } from '../../config/StaticData';
import './Dashboard.scss';
import { HeroContainer } from '../../components/';
import { FC, useContext, useEffect } from 'react';
import FirebaseContext from '../Firebase/Context';
import { connect } from 'react-redux';
import { getProducts } from '../../actions/Dashboard.action';
import { DashboardModel } from '../../models/Dashboard.model';

const Dashboard: FC<DashboardModel.IProps> = ({ getProducts }) => {
  const firebase = useContext(FirebaseContext);
  const { CATEGORIES_DATA } = TEST_DATA;
  useEffect(() => {
    firebase.db.ref(`products/`).once('value', (snap: any) => {
      getProducts(snap.val());
    });
    // eslint-disable-next-line
  }, []);

  return (
    <div id='dashboard-div'>
      <HeroContainer />
      {CATEGORIES_DATA.map((category: any) => (
        <CategoryContainer
          key={category.id}
          categoryId={category.id}
          categoryName={category.name}
        ></CategoryContainer>
      ))}
    </div>
  );
};

export default connect(null, { getProducts })(Dashboard);
