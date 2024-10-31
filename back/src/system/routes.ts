import UserRoute from "../routes/user";
import TokenRoute from "../routes/token";
import ProjectRoute from "../routes/project";
import NotesPageRouter from "../routes/notesPage";

type MainRoutesType = Array<[String, Object]>;

const mainRoutes: MainRoutesType = [
    ["/user", UserRoute.router],
    ["/token", TokenRoute.router],
    ["/project", ProjectRoute.router],

    ["/page/notes", NotesPageRouter.router],
];

export default mainRoutes;
