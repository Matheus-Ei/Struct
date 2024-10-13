import { ComponentType } from "react";
import { motion } from "framer-motion";

interface WithAnimationProps {}

function fade<T extends WithAnimationProps>(
    WrappedComponent: ComponentType<T>,
    direction: "in" | "out"
) {
    return (props: T) => {
        if (direction === "in") {
            return (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <WrappedComponent {...props} />
                </motion.div>
            );
        }

        return (
            <motion.div
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{ duration: 1 }}
            >
                <WrappedComponent {...props} />
            </motion.div>
        );
    };
}

export default fade;
