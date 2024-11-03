import { useState, useEffect, ComponentType } from "react";
import { useNavigate } from "react-router-dom";
import Login from "utils/login";
import LoadingPage from "./LoadingPage";
import { motion, AnimatePresence } from "framer-motion";

const withLoader = (WrappedComponent: ComponentType, checkLogin?: boolean) => {
    return function WithLoader() {
        const [loading, setLoading] = useState(true);
        const [canRenderComponent, setCanRenderComponent] = useState(false);

        const navigate = useNavigate();

        const check = () => {
            setTimeout(async () => {
                if (checkLogin) {
                    const response = await Login.check(navigate);
                    setLoading(!response);
                }

                setLoading(false);
            }, 50);
        };

        useEffect(check, [loading, navigate]);

        return (
            <AnimatePresence
                onExitComplete={() => {
                    if (!loading) {
                        setCanRenderComponent(true);
                    }
                }}
            >
                {loading && (
                    <motion.div
                        key="loading"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.2 }}
                        exit={{ opacity: 0 }}
                    >
                        <LoadingPage />
                    </motion.div>
                )}

                {canRenderComponent && (
                    <motion.div
                        key="wrapped"
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4 }}
                        exit={{ opacity: 0 }}
                    >
                        <WrappedComponent />
                    </motion.div>
                )}
            </AnimatePresence>
        );
    };
};

export default withLoader;
