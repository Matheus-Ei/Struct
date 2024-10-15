// HOCs
import withLoader from "../../HOCs/withLoader";

const Home = () => {
    return <div className="flex-body">Home</div>;
};

export default withLoader(Home, "small");
