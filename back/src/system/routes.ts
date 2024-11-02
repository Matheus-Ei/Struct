import UserRoute from "../routes/user";
import TokenRoute from "../routes/token";
import ProjectRoute from "../routes/project";
import NotesPageRoute from "../routes/page/notes";
import PageGeralRoute from "../routes/page/geral";

type MainRoutesType = Array<[String, Object]>;

const mainRoutes: MainRoutesType = [
    ["/user", UserRoute.router],
    ["/token", TokenRoute.router],
    ["/project", ProjectRoute.router],

    ["/page/notes", NotesPageRoute.router],
    ["/page/geral", PageGeralRoute.router],
];

export default mainRoutes;
