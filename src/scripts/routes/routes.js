import Home from '../views/pages/home';
import Timbang from '../views/pages/timbang';
import AboutUs from '../views/pages/aboutus';

const routes = {
  '/': Home, // default page
  '/home': Home,
  '/timbang': Timbang,
  '/aboutus': AboutUs,
};

export default routes;
