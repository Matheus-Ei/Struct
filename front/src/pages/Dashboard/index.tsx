// HOCs
import withLoader from "../../HOCs/withLoader";

// Hooks
import { useState } from "react";

// Components
import Menu from "./Menu";
import Page from "./Page";

const Dashboard = () => {
    const [selectedName, setSelected] = useState<string>("Projects");

    return (
        <div>
            <Menu selectedName={selectedName} setSelected={setSelected} />
            <Page selectedName={selectedName} />
        </div>
    );
};

export default withLoader(Dashboard, "large", true);
