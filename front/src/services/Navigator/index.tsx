import { BrowserRouter, Routes, Route } from "react-router-dom";
import routes from "./routes";

class Navigator {
    addRoute(path: string, element: () => JSX.Element, key: number): JSX.Element {
        return <Route path={path} element={element()} key={key}></Route>;
    }

    setup(): JSX.Element {
        return (
            <BrowserRouter>
                <Routes>
                    {routes.map((item, index) => {
                        return this.addRoute(item[0], item[1], index);
                    })}
                </Routes>
            </BrowserRouter>
        );
    }
}

export default Navigator;
