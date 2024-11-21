// Libraries
import { useNavigate } from "react-router-dom";

// Local
import Button from "components/Button";
import User from "services/user";

const Logout = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        User.logout(navigate);
    };

    return (
        <Button
            text="Exit"
            onClick={handleLogout}
            className="flex bg-base-200 px-4 py-2 rounded-btn"
        />
    );
};

export default Logout;
