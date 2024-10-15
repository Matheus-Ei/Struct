// Components
import Card from "../../components/common/Card";
import Logo from "../../components/layout/Logo";
import Form from "../../components/layout/Form";

// Hooks
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../../hooks/useTheme";

// Utils
import LoginClass from "../../utils/login";
import File from "../../utils/file";
import Message from "../../components/common/Message";
import BlankSeparator from "../../components/common/BlankSeparator";

// HOCs
import withLoader from "../../HOCs/withLoader";
import LineSeparator from "../../components/common/LineSeparator";

const Login = () => {
    const [mail, setMail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const theme = useTheme();
    const [error, setError] = useState<boolean>(false);

    const navigate = useNavigate();

    const makeLogin = () => {
        LoginClass.make(mail, password, navigate).then((response) => {
            setError(!response);
        });
    };

    return (
        <div>
            <Card>
                <div style={{ flexDirection: "column" }}>
                    <Logo
                        src={File.get(
                            `images/logo-1920x1080-1-${theme.style}.png`
                        )}
                        text="Venha fazer parte de um mundo mais organizado."
                    />

                    <BlankSeparator size={60} direction="vertical" />

                    <Message
                        text="Mail or password is incorrect, try again..."
                        type="error"
                        style="text"
                        isVisible={error}
                    />

                    <Form
                        src={[
                            ["Mail...", setMail, false],
                            ["Password...", setPassword, true],
                        ]}
                        action={makeLogin}
                        sendText="LOGIN"
                    />

                    <BlankSeparator size={35} direction="vertical" />

                    <LineSeparator
                        text="Or login with"
                        width={80}
                        style="dual"
                    />

                    <BlankSeparator size={120} direction="vertical" />
                </div>
            </Card>
        </div>
    );
};

export default withLoader(Login, "large");
