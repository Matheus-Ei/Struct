// Components
import Button from "../../components/Button";
import Card from "../../components/Card";
import Input from "../../components/Input";

// Utils
import login from "../../utils/login";

// Hooks
import { useState } from "react";
import { useNavigate } from "react-router";
import File from "../../services/File";

const Login = () => {
    document.documentElement.setAttribute("data-theme", "light");

    const [mail, setMail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const navigate = useNavigate();

    const handleLogin = () => {
        login.make(mail, password, navigate);
    };

    return (
        <div className="w-screen h-screen flex items-center justify-center">
            <Card>
                <div className="flex flex-col items-center justify-center w-[30vw]">
                    <h1 className="text-secondary font-bold text-4xl mb-2">
                        LOGIN
                    </h1>

                    <p className="text-middle mb-32 text-center text-lg">
                        Venha fazer parte de um mundo mais organizado.
                    </p>

                    <Input text="Mail" setValue={setMail} />
                    <Input
                        text="Password"
                        setValue={setPassword}
                        isPassword={true}
                    />

                    <Button text="LOGIN" inverse={true} onClick={handleLogin} />
                </div>
            </Card>
        </div>
    );
};

export default Login;
