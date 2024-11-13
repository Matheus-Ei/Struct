// Libraries
import { useState } from "react";

// Local
import withLoader from "HOCs/withLoader";
import Projects from "./Projects";
import Header from "./Header";

const Dashboard = () => {
    const [tab, setTab] = useState<string>("Projects");

    const getTab = () => {
        switch (tab) {
            case "Projects":
                return <Projects />;
            case "Tools":
                return <div>Tools</div>;

            default:
                return <div>ERROR...</div>;
        }
    };

    return (
        <div className="flex flex-col justify-start items-center w-screen h-[97vh]">
            <Header tab={tab} setTab={setTab} />

            {getTab()}
        </div>
    );
};

export default withLoader(Dashboard, true);
