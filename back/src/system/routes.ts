// Routes
import userProviderRoute from "../routes/provider/user";
import userRoute from "../routes/user";
import tokenRoute from "../routes/token";
import projectRoute from "../routes/project/project";
import shareRoute from "../routes/project/share";
import pageRoute from "../routes/page";
import rootRoute from "../routes/root";

type MainRoutesType = Array<[String, Object]>;

const mainRoutes: MainRoutesType = [
    ["/user", userRoute.router],
    ["/token", tokenRoute.router],
    ["/page", pageRoute.router],

    // Project
    ["/project", projectRoute.router],
    ["/project/share", shareRoute.router],

    // Providers
    ["/provider/user", userProviderRoute.router],


    ["/", rootRoute.router],
];

export default mainRoutes;
