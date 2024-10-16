// Routes
import UserRoute from "../routes/user";
import TokenRoute from "../routes/token";
import ProjectRoute from "../routes/project";

type MainRoutesType = Array<[String, Object]>;

const mainRoutes: MainRoutesType = [
    ["/user", UserRoute.router],
    ["/token", TokenRoute.router],
    ["/project", ProjectRoute.router],
];

export default mainRoutes;
