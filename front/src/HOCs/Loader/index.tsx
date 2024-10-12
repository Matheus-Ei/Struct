// Hooks
import { useState, useEffect, ComponentType } from "react";
import { useNavigate } from "react-router-dom";

// Components
import Login from "../../utils/login";
import LoadingPage from "./LoadingPage";

const Loader = (WrappedComponent: ComponentType) => {
    return function WithLoader(props: any) {
        const [loading, setLoading] = useState(true);
        const navigate = useNavigate();

        const check = async () => {
            setLoading(true);

            const response = await Login.check(navigate);
            setTimeout(() => {
                setLoading(response);
            }, 500);
        };

        useEffect(() => {
            check();
        }, []);

        if (loading) {
            return <LoadingPage />;
        }

        return <WrappedComponent {...props} />;
    };
};

export default Loader;
