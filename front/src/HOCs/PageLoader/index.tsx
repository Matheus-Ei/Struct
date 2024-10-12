// Hooks
import React, { useState, useEffect, ComponentType } from "react";
import { useNavigate } from "react-router-dom";

// Components
import Login from "../../utils/login";
import LoadingPage from "./LoadingPage";

const PageLoader = (WrappedComponent: ComponentType, checkLogin?: boolean) => {
    return function WithLoader(props: any) {
        const [loading, setLoading] = useState(true);
        const navigate = useNavigate();

        const check = async () => {
            const response = await Login.check(navigate);
            setLoading(response);
        };

        useEffect(() => {
            if (checkLogin) {
                check();
            }

            setTimeout(() => {
                setLoading(false);
            }, 500);
        }, []);

        if (loading) {
            return <LoadingPage />;
        }

        return <WrappedComponent {...props} />;
    };
};

export default PageLoader;
