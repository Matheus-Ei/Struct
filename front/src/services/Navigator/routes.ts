import Login from "../../pages/Login";
import Dashboard from "../../pages/Dashboard";
import Landing from "../../pages/Landing";

type RoutesType = Array<[string, any]>;

const routes: RoutesType = [
    ["/", Landing],
    ["/login", Login],
    ["/dashboard", Dashboard],
];

export default routes;
