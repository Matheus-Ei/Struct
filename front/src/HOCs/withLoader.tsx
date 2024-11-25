// Libraries
import { useEffect, ComponentType } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

// Local
import User from "services/user";

const withLoader = (WrappedComponent: ComponentType, checkLogin?: boolean) => {
    return function WithLoader() {
        const navigate = useNavigate();

        const check = () => {
            if (checkLogin) User.verifyLogin(navigate);
        };

        useEffect(check, [navigate]);

        return (
            <motion.div
                key="wrapped"
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                exit={{ opacity: 0 }}
            >
                <WrappedComponent />
            </motion.div>
        );
    };
};

export default withLoader;
