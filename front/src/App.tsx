import Navigator from "./services/Navigator";

function App() {

    const navigate = new Navigator();
    return navigate.setup();
}

export default App;
