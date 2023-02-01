import List from '../views/pages/restaurant-list';
import Details from '../views/pages/detail';
import FavoriteTry from '../views/pages/favorite';

const routes = {
  '/': List,
  '/list': List,
  '/favorite': FavoriteTry,
  '/detail/:id': Details,
};

export default routes;
