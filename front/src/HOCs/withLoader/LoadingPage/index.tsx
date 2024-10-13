// Modules
import * as S from "./styles";
import * as T from "./types";

// Hooks
import { useTheme } from "../../../hooks/useTheme";

// Components
import { FourSquare } from "react-loading-indicators";

const LoadingPage = ({ size }: T.LoadingPageProps) => {
    const theme = useTheme();
    return (
        <S.Body>
            <FourSquare color={theme.secondary} size={size} speedPlus={2} />
        </S.Body>
    );
};

export default LoadingPage;
