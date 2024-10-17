// HOCs
import { useState } from "react";
import withLoader from "../../HOCs/withLoader";

// Components
import Menu from "./Menu";
import Page from "./Page";

const Dashboard = () => {
    const [selected, setSelected] = useState<string>("Home");

    return (
        <div className="flex flex-row justify-between items-center px-[1vw] w-screen h-screen">
            <Menu selected={selected} setSelected={setSelected} />
            <Page selected={selected} />
        </div>
    );
};

export default withLoader(Dashboard, true);
