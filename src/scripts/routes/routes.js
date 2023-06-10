import Home from '../views/pages/home';
import DetailArtikel from '../views/pages/detail-artikel';
import Timbang from '../views/pages/timbang';
import AboutUs from '../views/pages/about-us';

const routes = {
  '/': Home,
  '/home': Home,
  '/detail-artikel/:id': DetailArtikel,
  '/timbang': Timbang,
  '/about-us': AboutUs,
};

export default routes;
