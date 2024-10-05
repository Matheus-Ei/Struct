import Home from "../../pages/Home";

type RoutesType = Array<[string, () => JSX.Element]>;

const routes: RoutesType = [
    ["/", Home]
];

export default routes;
