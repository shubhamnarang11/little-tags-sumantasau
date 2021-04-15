import { CategoryContainer } from '..';
import { TEST_DATA } from '../../config/StaticData';
import './Dashboard.scss';

export default function Dashboard() {
  const { CATEGORIES_DATA } = TEST_DATA;

  return (
    <div id='dashboard-div'>
      {CATEGORIES_DATA.map((category) => (
        <CategoryContainer
          key={category.id}
          categoryId={category.id}
          categoryName={category.name}
        ></CategoryContainer>
      ))}
    </div>
  );
}
