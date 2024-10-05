// Libraries
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Modules
import routes from "./routes";

class Navigator {
    addRoute(path: string, element: () => JSX.Element): JSX.Element {
        return <Route path={path} element={element()}></Route>;
    }

    setup(): JSX.Element {
        return (
            <BrowserRouter>
                <Routes>
                    {routes.map((item) => {
                        return this.addRoute(item[0], item[1]);
                    })}
                </Routes>
            </BrowserRouter>
        );
    }
}

export default Navigator;
