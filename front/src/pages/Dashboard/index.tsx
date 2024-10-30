import Projects from "pages/Projects";
import Header from "./Header";
import withLoader from "HOCs/withLoader";

const Dashboard = () => {
    return (
        <div className="flex flex-col justify-start items-center w-screen h-screen">
            <Header />
            <Projects />
        </div>
    );
};

export default withLoader(Dashboard, true);
