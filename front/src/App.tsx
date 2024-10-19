// Components
import Navigator from "./services/Navigator";

function App() {
    document.documentElement.setAttribute("data-theme", "dark");

    const navigate = new Navigator();
    return navigate.setup();
}

export default App;
