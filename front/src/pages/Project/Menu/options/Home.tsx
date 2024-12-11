// Library
import { useNavigate } from "react-router-dom";

// Local
import Point from "components/Point";

const Home = () => {
    const navigate = useNavigate();

    return (
        <Point
            text="Home"
            icon={{ name: "IoMdHome", library: "io" }}
            onClick={() => navigate("/dashboard")}
        />
    );
};

export default Home;
