import Detail from '../views/components/detail/Detail';
import Favorite from '../views/components/favorite/favorite';
import Home from '../views/components/home/Home';

const Routes = {
    '/': Home,
    '/detail/:id': Detail,
    '/favorite': Favorite,
};

export default Routes;
