// Modules
import * as S from "./styles";

// Components
import Card from "../../components/common/Card";
import CardHeader from "../../components/layout/CardHeader";
import MultInput from "../../components/layout/MultInputs";
import SimpleButton from "../../components/common/SimpleButton";

// Hooks
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// Services
import Request from "../../services/Request";

const Login = () => {
    const navigate = useNavigate();
    const [logo, setLogo] = useState();

    useEffect(() => {
        setLogo(require("../../assets/images/logo-1920x1080-1.png"));
    }, []);

    const [mail, setMail] = useState();
    const [password, setPassword] = useState();

    const handleLogin = () => {
        const url = `${process.env.REACT_APP_BACK_URL}/users/login`;
        Request.post(url, {
            mail,
            password,
        }).then((response) => {
            if (response.status === true) {
                return navigate("/dashboard");
            } else {
                console.error("Login wasn't sucessfull");
            }
        });
    };

    return (
        <S.Body>
            <Card
                width={28}
                height={65}
                flexDirection="column"
                justifyContent="center"
                gap={10}
            >
                <>
                    <CardHeader
                        src={logo}
                        text="Venha fazer parte de um mundo mais organizado."
                        flexDirection="column"
                    />

                    <MultInput
                        srcList={[
                            ["Mail...", setMail],
                            ["Password...", setPassword],
                        ]}
                    />

                    <SimpleButton text="LOGIN" onClick={handleLogin} />
                </>
            </Card>
        </S.Body>
    );
};

export default Login;
