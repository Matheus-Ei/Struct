// React
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Styles
import './utils/styles.css';

// Components
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./hooks/useTheme";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);

root.render(
    <React.StrictMode>
        <ThemeProvider>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </ThemeProvider>
    </React.StrictMode>
);
