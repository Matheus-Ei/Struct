// Routes
import accountRoute from '../routes/account';
import tokenRoute from '../routes/token';
import projectRoute from '../routes/project/project';
import shareRoute from '../routes/project/share';
import pageRoute from '../routes/page/page';
import notePageRoute from '../routes/page/modules/note';
import rootRoute from '../routes/root';
import uploadRoute from '../routes/upload';

type MainRoutesType = Array<[String, Object]>;

const mainRoutes: MainRoutesType = [
  ['/account', accountRoute.router],
  ['/token', tokenRoute.router],
  ['/upload', uploadRoute.router],

  // Project
  ['/project', projectRoute.router],
  ['/project/share', shareRoute.router],

  // Page
  ['/page', pageRoute.router],
  ['/page/note', notePageRoute.router],

  ['/', rootRoute.router],
];

export default mainRoutes;
