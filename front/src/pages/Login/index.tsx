import { ReactComponent as Logo } from "assets/logo-1800x400-1.svg";
import Card from "components/Card";
import Message from "components/Message";
import Input from "components/Input";
import Button from "components/Button";
import login from "utils/login";
import { useState } from "react";
import { useNavigate } from "react-router";
import useToggle from "hooks/useToggle";
import GoogleLoginButton from "./GoogleLoginButton";

const Login = () => {
    const [mail, setMail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [error, toggleError] = useToggle(false);

    const navigate = useNavigate();

    const handleLogin = () => {
        login.make(mail, password, "Default", navigate).then(() => {
            toggleError(true);
        });
    };

    return (
        <div className="w-screen h-[97vh] flex items-center justify-center">
            <Card>
                <div className="flex flex-col items-center justify-center w-[25vw] py-6 px-4">
                    <Logo className="text-primary w-full h-fit mb-4" />

                    <p className="text-primary mb-32 text-center text-lg">
                        Venha fazer parte de um mundo mais organizado.
                    </p>

                    <Message
                        text="Mail or password incorrect, please, try again..."
                        type="error"
                        box="text"
                        isVisible={error}
                    />

                    <Input
                        text="Mail"
                        setValue={setMail}
                        onEnter={handleLogin}
                    />

                    <Input
                        text="Password"
                        setValue={setPassword}
                        isPassword={true}
                        onEnter={handleLogin}
                    />

                    <Button text="Login" inverse={true} onClick={handleLogin} />

                    <div className="divider">Or login with</div>

                    <GoogleLoginButton toggleError={toggleError} />
                </div>
            </Card>
        </div>
    );
};

export default Login;
