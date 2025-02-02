// Routes
import accountRoute from '../routes/account';
import tokenRoute from '../routes/token';
import projectRoute from '../routes/project/project';
import shareRoute from '../routes/project/share';
import pageRoute from '../routes/page';
import rootRoute from '../routes/root';

type MainRoutesType = Array<[String, Object]>;

const mainRoutes: MainRoutesType = [
  ['/account', accountRoute.router],
  ['/token', tokenRoute.router],
  ['/page', pageRoute.router],

  // Project
  ['/project', projectRoute.router],
  ['/project/share', shareRoute.router],

  ['/', rootRoute.router],
];

export default mainRoutes;
