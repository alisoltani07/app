import Home from './Home';
import Search from './Search';
import Library from './Library';
import Dashboard from './Dashboard';
import { ReactComponent as HomeIcon } from '../../assets/home-icon.svg';
import { ReactComponent as SearchIcon } from '../../assets/search-icon.svg';
import { ReactComponent as LibraryIcon } from '../../assets/library-icon.svg';

export default {
  path: '/dashboard',
  component: Dashboard,
  auth: true,

  routes: [
    {
      name: 'Home',
      exact: true,
      path: `/dashboard`,
      icon: HomeIcon,
      component: Home
    },
    {
      name: 'Search',
      path: `/dashboard/search`,
      icon: SearchIcon,
      component: Search
    },
    {
      name: 'Your Libraries',
      path: `/dashboard/libraries`,
      icon: LibraryIcon,
      component: Library
    }
  ]
};
