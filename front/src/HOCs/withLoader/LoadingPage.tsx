// Components
import { FourSquare } from "react-loading-indicators";

interface LoadingPageProps {
    size: "small" | "medium" | "large";
}

const LoadingPage = ({ size }: LoadingPageProps) => {
    return (
        <div>
            <FourSquare size={size} speedPlus={2} />
        </div>
    );
};

export default LoadingPage;
