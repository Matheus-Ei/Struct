// Modules
import routes from "./routes";

// Components
import { Routes, Route } from "react-router-dom";

class Navigator {
    addRoute(
        path: string,
        element: () => JSX.Element,
        key: number
    ): JSX.Element {
        return <Route path={path} element={element()} key={key}></Route>;
    }

    setup(): JSX.Element {
        return (
            <Routes>
                {routes.map((item, index) => {
                    return this.addRoute(item[0], item[1], index);
                })}
            </Routes>
        );
    }
}

export default Navigator;
