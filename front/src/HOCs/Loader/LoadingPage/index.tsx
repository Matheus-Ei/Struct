// Modules
import * as S from "./styles";

// Hooks
import { useTheme } from "../../../hooks/useTheme";

// Components
import { FourSquare } from "react-loading-indicators";

const LoadingPage = () => {
    const theme = useTheme();
    return (
        <S.Body>
            <FourSquare color={theme.secondary} size="large" speedPlus={-2} />
        </S.Body>
    );
};

export default LoadingPage;
