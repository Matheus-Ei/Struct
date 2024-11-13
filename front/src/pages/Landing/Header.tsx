// Libraries
import { useNavigate } from "react-router-dom";

// Local
import { ReactComponent as Logo } from "assets/logo-1800x400-1.svg";
import Button from "components/Button";
import Login from "utils/login";

const Header = () => {
    const navigate = useNavigate();

    const onLogin = () => {
        Login.check(navigate).then((response) => {
            response && navigate("/dashboard");
        });
    };

    const onSignup = () => {
        navigate("/sign-up");
    };

    return (
        <div className="flex flex-row relative justify-between items-center top-0 border-b border-base-200 w-screen h-16 px-6">
            <Logo className="w-fit h-3/4 text-primary" />

            <div className="flex gap-4">
                <Button
                    text="LOGIN"
                    className="border w-fit h-fit px-10 py-1 rounded-btn bg-base-100 border-primary"
                    onClick={onLogin}
                />

                <Button
                    text="SIGN-UP"
                    className="border w-fit h-fit px-10 py-1 rounded-btn bg-base-100 border-primary"
                    onClick={onSignup}
                />
            </div>
        </div>
    );
};

export default Header;
