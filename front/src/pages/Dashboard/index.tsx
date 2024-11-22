// Libraries
import { createElement, useState } from "react";

// Local
import withLoader from "HOCs/withLoader";
import Header from "./Header";
import router from "./router";

const Dashboard = () => {
    const [tab, setTab] = useState<string>("Projects");

    const renderTab = (item: [string, () => JSX.Element], index: number) => {
        if (tab !== item[0]) return null;

        return createElement(item[1], { key: index });
    };

    return (
        <div className="flex flex-col justify-start items-center w-screen h-[97vh]">
            <Header tab={tab} setTab={setTab} />

            {router.map(renderTab)}
        </div>
    );
};

export default withLoader(Dashboard, true);
