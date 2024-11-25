// Routes
import userProviderRoute from "../routes/provider/user.js";
import userRoute from "../routes/user.js";
import tokenRoute from "../routes/token.js";
import projectRoute from "../routes/project/project.js";
import shareRoute from "../routes/project/share.js";
import notesPageRoute from "../routes/page/modules/notes.js";
import pageRoute from "../routes/page/page.js";
import rootRoute from "../routes/root.js";

type MainRoutesType = Array<[String, Object]>;

const mainRoutes: MainRoutesType = [
    ["/user", userRoute.router],
    ["/token", tokenRoute.router],

    // Project
    ["/project", projectRoute.router],
    ["/project/share", shareRoute.router],

    // Providers
    ["/provider/user", userProviderRoute.router],

    // Page
    ["/page", pageRoute.router],
    ["/page/notes", notesPageRoute.router],

    ["/", rootRoute.router],
];

export default mainRoutes;
