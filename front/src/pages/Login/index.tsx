import Card from "../../components/Card";
import Image from "../../components/Image";
import * as S from "./styles";

const Login = () => {
    return (
        <S.Body>
            <Card width={50} flexDirection="column">
                <>
                    <Image
                        src={require("../../assets/images/logo-1920x1080-1.png")}
                    />
                </>
            </Card>
        </S.Body>
    );
};

export default Login;
