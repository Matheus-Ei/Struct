// Components
import { useEffect } from "react";
import Navigator from "services/Navigator";
import { LocalStorage } from "services/Storage";

function App() {
    useEffect(() => {
        const localTheme = LocalStorage.get("theme");
        const theme = localTheme ? localTheme.theme : "default";

        document.documentElement.setAttribute("data-theme", theme);
    }, []);

    const navigate = new Navigator();
    return navigate.setup();
}

export default App;
