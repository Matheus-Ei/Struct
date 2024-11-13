// Routes
import UserRoute from "../routes/user.js";
import TokenRoute from "../routes/token.js";
import ProjectRoute from "../routes/project.js";
import NotesPageRoute from "../routes/page/notes.js";
import PageGeralRoute from "../routes/page/geral.js";

type MainRoutesType = Array<[String, Object]>;

const mainRoutes: MainRoutesType = [
    ["/user", UserRoute.router],
    ["/token", TokenRoute.router],
    ["/project", ProjectRoute.router],

    ["/page/notes", NotesPageRoute.router],
    ["/page/geral", PageGeralRoute.router],
];

export default mainRoutes;
