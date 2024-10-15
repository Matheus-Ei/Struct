// HOCs
import withLoader from "../../HOCs/withLoader";

const Shared = () => {
    return <div>Shared</div>;
};

export default withLoader(Shared, "small");
