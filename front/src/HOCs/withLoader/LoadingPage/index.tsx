import * as T from "./types";

// Hooks
import { useTheme } from "../../../hooks/useTheme";

// Components
import { FourSquare } from "react-loading-indicators";

const LoadingPage = ({ size }: T.LoadingPageProps) => {
    const theme = useTheme();
    return (
        <div className="flex-body" style={{ marginTop: "10%" }}>
            <FourSquare color={theme.secondary} size={size} speedPlus={2} />
        </div>
    );
};

export default LoadingPage;
