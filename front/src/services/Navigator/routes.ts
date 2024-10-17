import Login from "../../pages/Login";
import Dashboard from "../../pages/Dashboard";

type RoutesType = Array<[string, () => JSX.Element]>;

const routes: RoutesType = [
    ["/login", Login],
    ["/dashboard", Dashboard],
];

export default routes;
