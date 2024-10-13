// Routes
import UserRoute from "../routes/user.js";
import TokenRoute from "../routes/token.js";
import ProjectRoute from "../routes/project.js";

type MainRoutesType = Array<[String, Object]>;

const mainRoutes: MainRoutesType = [
    ["/user", UserRoute.router],
    ["/token", TokenRoute.router],
    ["/project", ProjectRoute.router],
];

export default mainRoutes;
