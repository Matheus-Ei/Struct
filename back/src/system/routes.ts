import UserRoute from "../routes/user.js";
import TokenRoute from "../routes/token.js";

type MainRoutesType = Array<[String, Object]>

const mainRoutes: MainRoutesType = [
    ["/users", UserRoute.router],
    ["/token", TokenRoute.router],
];

export default mainRoutes;
