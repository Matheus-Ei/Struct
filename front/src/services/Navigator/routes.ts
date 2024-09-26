import Home from "../../pages/Home";

type RoutesType = Array<{ path: string; element: () => JSX.Element }>;

const routes: RoutesType = [
    {
        path: "/",
        element: Home,
    },
];

export default routes;
