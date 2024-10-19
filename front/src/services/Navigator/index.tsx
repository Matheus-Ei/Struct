// Modules
import routes from "./routes";

// Components
import { Routes, Route } from "react-router-dom";
import React from "react";

class Navigator {
    addRoute(path: string, element: () => JSX.Element, key: number) {
        return (
            <Route
                path={path}
                element={React.createElement(element)}
                key={key}
            ></Route>
        );
    }

    setup() {
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
