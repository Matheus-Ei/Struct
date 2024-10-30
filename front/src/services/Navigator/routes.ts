import Dashboard from "pages/Dashboard";
import Projects from "pages/Projects";
import Settings from "pages/Settings";
import Landing from "../../pages/Landing";
import Login from "../../pages/Login";

type RoutesType = Array<[string, () => JSX.Element]>;

const routes: RoutesType = [
    ["/", Landing],
    ["/login", Login],
    ["/dashboard", Dashboard],
    ["/settings", Settings],
    ["/projects/:id", Projects],
];

export default routes;
