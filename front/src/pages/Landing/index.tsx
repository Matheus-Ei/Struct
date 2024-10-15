// HOCs
import withLoader from "../../HOCs/withLoader";

// Components
import Text from "../../components/common/Text";

const Landing = () => {
    return (
        <div>
            <Text text="Test" />
        </div>
    );
};

export default withLoader(Landing, "small");
