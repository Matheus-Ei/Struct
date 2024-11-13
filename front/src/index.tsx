import React from "react";
import ReactDOM from "react-dom/client";
import Providers from "utils/Providers";
import App from "./App";
import "./global.css";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);

root.render(
    <React.StrictMode>
        <Providers>
            <App />
        </Providers>
    </React.StrictMode>
);
