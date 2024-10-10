// Utils
import * as S from "./styles";

// Components
import Card from "../../components/common/Card";
import { CardHeader } from "../../components/layout/CardHeader";
import { MultInput } from "../../components/layout/MultInputs";
import SimpleButton from "../../components/common/SimpleButton";
import Text from "../../components/common/Text";

// Hooks
import { useState } from "react";
import { useTheme } from "../../hooks/useTheme";
import Request from "../../services/Request";
import Navigator from "../../services/Navigator";

const Login = () => {
    const theme = useTheme();

    const [mail, setMail] = useState();
    const [password, setPassword] = useState();

    const handleLogin = () => {
        const url = `${process.env.REACT_APP_BACK_URL}/users/login`;
        Request.post(url, {
            mail,
            password,
        }).then((response) => {
            if (response.status === true) {
                return Navigator.navigate('/dashboard')
            } else {
                console.error("Login wasn't sucessfull")
            }
        });
    };

    return (
        <S.Body>
            <Card
                width={30}
                height={60}
                flexDirection="column"
                justifyContent="center"
                gap={10}
            >
                <>
                    <CardHeader
                        src={require("../../assets/images/logo-1920x1080-1.png")}
                        text="Venha fazer parte de um mundo mais organizado."
                        flexDirection="column"
                    />

                    <MultInput
                        srcList={[
                            ["Mail...", setMail],
                            ["Password...", setPassword],
                        ]}
                    />

                    <SimpleButton
                        backgroundColor={theme.secondary}
                        onClick={handleLogin}
                    >
                        <Text text="LOGIN" color={theme.primary} />
                    </SimpleButton>
                </>
            </Card>
        </S.Body>
    );
};

export default Login;
