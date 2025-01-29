// Libraries
import { useNavigate } from "react-router-dom";

// Local
import Button from "components/Button";
import User from "services/user";

const Logout = () => {
    const navigate = useNavigate();
    const handleLogout = () => User.logout(navigate);

    return (
        <Button
            text="Logout"
            onClick={handleLogout}
            className="flex w-fit text-error font-bold border-error px-4 py-1 rounded-btn hover:bg-error hover:text-base-content"
        />
    );
};

export default Logout;
