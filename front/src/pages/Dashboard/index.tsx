// Libraries
import { useState } from "react";

// Local
import withLoader from "HOCs/withLoader";
import Header from "./Header";
import Page from "./Page";

const Dashboard = () => {
    const [tab, setTab] = useState<string>("Projects");

    return (
        <div className="flex flex-col justify-start items-center w-screen h-[97vh]">
            <Header tab={tab} setTab={setTab} />

            <Page tab={tab} />
        </div>
    );
};

export default withLoader(Dashboard, true);
