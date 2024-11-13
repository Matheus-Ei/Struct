// Libraries
import { useEffect } from "react";

// Local
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
