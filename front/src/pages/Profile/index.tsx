// HOCs
import withLoader from "../../HOCs/withLoader";

const Profile = () => {
    return <div className="flex-body">Profile</div>;
};

export default withLoader(Profile, "small");
