// Modules
import * as S from "./styles";

// Components
import Card from "../../components/common/Card";
import Logo from "../../components/layout/Logo";
import Form from "../../components/layout/Form";

// Hooks
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// Utils
import LoginClass from "../../utils/login";
import File from "../../utils/file";
import Message from "../../components/common/Message";
import BlankSeparator from "../../components/common/BlankSeparator";
import { useTheme } from "../../hooks/useTheme";
import PageLoader from "../../HOCs/PageLoader";

const Login = (): JSX.Element => {
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
        <S.Body>
            <Card width={30} flexDirection="column" justifyContent="center">
                <>
                    <Logo
                        src={File.get(
                            `images/logo-1920x1080-1-${theme.style}.png`
                        )}
                        text="Venha fazer parte de um mundo mais organizado."
                        flexDirection="column"
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

                    <BlankSeparator size={20} direction="vertical" />
                </>
            </Card>
        </S.Body>
    );
};

export default PageLoader(Login);
