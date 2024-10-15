// Hooks
import { useTheme } from "../../hooks/useTheme";

// Components
import { FourSquare } from "react-loading-indicators";

interface LoadingPageProps {
    size: "small" | "medium" | "large";
}

const LoadingPage = ({ size }: LoadingPageProps) => {
    const theme = useTheme();
    return (
        <div className="flex-body" style={{ marginTop: "10%" }}>
            <FourSquare color={theme.secondary} size={size} speedPlus={2} />
        </div>
    );
};

export default LoadingPage;
