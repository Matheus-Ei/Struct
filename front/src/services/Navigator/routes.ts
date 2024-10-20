// Pages
import Landing from "../../pages/Landing";
import Login from "../../pages/Login";
import Dashboard from "../../pages/Dashboard";
import Projects from "pages/Projects";

type RoutesType = Array<[string, () => JSX.Element]>;

const routes: RoutesType = [
    ["/", Landing],
    ["/login", Login],
    ["/dashboard", Dashboard],
    ["/projects", Projects],
];

export default routes;
