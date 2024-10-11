import { useTheme } from "./hooks/useTheme";
import Navigator from "./services/Navigator";

function App() {
    const theme = useTheme();
    if (theme.primary) {
        const body = document.querySelector("body")
        if (body) {
            body.style.backgroundColor = theme.primary;
        }
    }

    const navigate = new Navigator();
    return navigate.setup();
}

export default App;
