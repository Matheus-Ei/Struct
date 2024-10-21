// Components
import withLoader from "HOCs/withLoader";
import Projects from "pages/Projects";
import Header from "./Header";

const Dashboard = () => {
    return (
        <div className="flex flex-col justify-start items-center w-screen h-screen">
            <Header />
            <Projects />
        </div>
    );
};

export default withLoader(Dashboard, true);
