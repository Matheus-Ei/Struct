import Projects from "./Projects";
import Header from "./Header";
import withLoader from "HOCs/withLoader";
import { useState } from "react";

const Dashboard = () => {
    const [tab, setTab] = useState<string>("Projects");

    const getTab = () => {
        switch (tab) {
            case "Projects":
                return <Projects />;
            case "Tools":
                return <div>Tools</div>;
            case "Workflow":
                return <div>Workflow</div>;

            default:
                return <div>ERROR...</div>;
        }
    };

    return (
        <div className="flex flex-col justify-start items-center w-screen h-screen">
            <Header tab={tab} setTab={setTab} />

            {getTab()}
        </div>
    );
};

export default withLoader(Dashboard, true);
