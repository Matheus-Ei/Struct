// Components
import { useEffect } from "react";
import Navigator from "services/Navigator";
import Theme from "services/Theme";

function App() {
    useEffect(() => {
        Theme.set();
    }, []);

    const navigate = new Navigator();
    return navigate.setup();
}

export default App;
