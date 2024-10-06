import UserRoute from "../routes/userRoute.js";

type MainRoutesType = Array<[String, Object]>

const mainRoutes: MainRoutesType = [
    ["/user", UserRoute.router],
];

export default mainRoutes;
