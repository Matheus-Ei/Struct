import Navigator from "services/Navigator";
import Theme from "services/Theme";
import { useEffect } from "react";

function App() {
    useEffect(() => {
        Theme.set();
    }, []);

    const navigate = new Navigator();
    return navigate.setup();
}

export default App;
