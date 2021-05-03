import { CategoryContainer } from '..';
import { TEST_DATA } from '../../config/StaticData';
import './Dashboard.scss';
import { HeroContainer } from '../../components/';
import { FC, useContext, useEffect } from 'react';
import FirebaseContext from '../Firebase/Context';
import { connect } from 'react-redux';
import { getProducts } from '../../actions/Dashboard.action';
import { DashboardModel } from '../../models/Dashboard.model';

const Dashboard: FC<DashboardModel.IProps> = ({ products, getProducts }) => {
  const firebase = useContext(FirebaseContext);
  const { CATEGORIES_DATA } = TEST_DATA;
  useEffect(() => {
    firebase.db.ref(`products/`).once('value', (snap: any) => {
      console.log(snap.val());

      getProducts(snap.val());
    });
  }, []);
  console.log(products);

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

const mapStateToProps = (state: any) => ({
  products: state.dashboardState.products,
});

export default connect(mapStateToProps, { getProducts })(Dashboard);
