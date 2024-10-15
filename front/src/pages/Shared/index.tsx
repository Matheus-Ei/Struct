// HOCs
import withLoader from "../../HOCs/withLoader";

const Shared = () => {
    return <div className="flex-body">Shared</div>;
};

export default withLoader(Shared, "small");
