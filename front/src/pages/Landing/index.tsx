// HOCs
import withLoader from "../../HOCs/withLoader";

const Landing = () => {
    return (
        <div className="flex-body">
            <p>Landing page</p>
        </div>
    );
};

export default withLoader(Landing, "small");
