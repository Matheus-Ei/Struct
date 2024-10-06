import UserRoute from "../routes/user.js";

type MainRoutesType = Array<[String, Object]>

const mainRoutes: MainRoutesType = [
    ["/users", UserRoute.router],
];

export default mainRoutes;
