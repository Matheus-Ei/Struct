import Card from "../../components/Card";
import Image from "../../components/Image";
import Input from "../../components/Input";
import Text from "../../components/Text";
import { useTheme } from "../../hooks/useTheme";
import * as S from "./styles";

const Login = () => {
    const theme = useTheme();

    return (
        <S.Body>
            <Card width={30} height={80} flexDirection="column" justifyContent="flex-start">
                <>
                    <Image
                        width={90}
                        src={require("../../assets/images/logo-1920x1080-1.png")}
                    />

                    <Text
                        text="This is a test element..."
                        color={theme.middle}
                    />

                    <Input
                        text="test"
                        width={100}
                        height={70}
                        borderRadius={10}
                        primaryColor={theme.primary}
                        middleColor={theme.middle}
                        secondaryColor={theme.secondary}
                    />
                </>
            </Card>
        </S.Body>
    );
};

export default Login;
