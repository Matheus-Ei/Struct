// Pages
import Dashboard from "pages/Dashboard";
import NotFound from "pages/NotFound";
import Profile from "pages/Profile";
import Project from "pages/Project";
import Settings from "pages/Settings";
import SignUp from "pages/SignUp";
import Landing from "../../pages/Landing";
import Login from "../../pages/Login";

type RoutesType = Array<[string, () => JSX.Element]>;

const routes: RoutesType = [
    ["/", Landing],
    ["/login", Login],
    ["/sign-up", SignUp],
    ["/dashboard", Dashboard],
    ["/settings", Settings],
    ["/project/:id", Project],
    ["/profile/:nickname", Profile],
    ["*", NotFound],
];

export default routes;
